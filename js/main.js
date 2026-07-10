const inputArea = document.getElementById("json-input");
const outputArea = document.getElementById("json-output");
const formatButton = document.getElementById("format-button");
const minifyButton = document.getElementById("minify-button");
const messageArea = document.getElementById("message-area");


formatButton.addEventListener("click", () => {

    const jsonText = inputArea.value;

    try {

        const jsonData = JSON.parse(jsonText);

        const formattedJson = JSON.stringify(
            jsonData,
            null,
            2
        );

        outputArea.value = formattedJson;

        errorArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        errorArea.textContent =
            "JSON形式が正しくありません。";

    }

});

minifyButton.addEventListener("click", () => {

    const jsonText = inputArea.value;

    try {

        const jsonData = JSON.parse(jsonText);

        const minifiedJson = JSON.stringify(jsonData);

        outputArea.value = minifiedJson;

        messageArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        messageArea.textContent =
            "JSON形式が正しくありません。";

    }

});