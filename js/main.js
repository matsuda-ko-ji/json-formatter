const inputArea = document.getElementById("json-input");
const outputArea = document.getElementById("json-output");
const formatButton = document.getElementById("format-button");
const errorArea = document.getElementById("error-area");


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