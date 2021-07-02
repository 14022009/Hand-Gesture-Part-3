Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(document.getElementById("webcam_dis"));
console.log("ml5 version", ml5.version);

function take_pic() {
    Webcam.snap(function (snap) {
        document.getElementById("webcam_dis_s").innerHTML = "<img id='webcamera' src = " + snap + ">";
    });
}
classfiys = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1rznGgd4M/model.json', model_load);

function model_load() {
    console.log("my modal is loded");
}

function speak() {
    apis = window.speechSynthesis;
    speak_data_1 = "Your First Predection Is " + pe1;
    speak_data_2 = "Your Second Predection Is " + pe2;
    utt_of_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    apis.speak(utt_of_this);
}

function pre_pic() {
    pic_stored = document.getElementById("webcamera");
    classfiys.classify(pic_stored, reco);
}

function reco(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        pe1 = result[0].label;
        pe2 = result[1].label;
        document.getElementById("pre_hg_1t").innerHTML = result[0].label;
        document.getElementById("pre_hg_2t").innerHTML = result[1].label;
        if (pe1 == "Thumbs Down Or Dislike") {
            document.getElementById("pre_hg_1").innerHTML = "👎🏼";
        }

        if (pe1 == "Victory") {
            document.getElementById("pre_hg_1").innerHTML = "✌🏼";
        }

        if (pe1 == "Thumbs Up Or Like") {
            document.getElementById("pre_hg_1").innerHTML = "👍🏼";
        }

        if (pe1 == "Ok Or Nice") {
            document.getElementById("pre_hg_1").innerHTML = "👌🏼";
        }
        //
        if (pe2 == "Thumbs Down Or Dislike") {
            document.getElementById("pre_hg_2").innerHTML = "👎🏼";
        }

        if (pe2 == "Victory") {
            document.getElementById("pre_hg_2").innerHTML = "✌🏼";
        }

        if (pe2 == "Thumbs Up Or Like") {
            document.getElementById("pre_hg_2").innerHTML = "👍🏼";
        }

        if (pe2 == "Ok Or Nice") {
            document.getElementById("pre_hg_2").innerHTML = "👌🏼";
        }

        speak();
    }
}