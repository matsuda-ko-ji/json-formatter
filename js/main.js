const inputArea = document.getElementById("json-input");
const outputArea = document.getElementById("json-output");
const formatButton = document.getElementById("format-button");
const minifyButton = document.getElementById("minify-button");
const copyButton = document.getElementById("copy-button");
const messageArea = document.getElementById("message-area");


formatButton.addEventListener("click", () => {
    console.log("整形ボタン押下");
    const jsonText = inputArea.value;
    console.log("入力値:", jsonText);
    try {

        const jsonData = JSON.parse(jsonText);

        const formattedJson = JSON.stringify(
            jsonData,
            null,
            2
        );

        outputArea.value = formattedJson;

        copyButton.disabled = false;

        messageArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        messageArea.textContent =
            "JSON形式が正しくありません。";

    }

});

minifyButton.addEventListener("click", () => {

    const jsonText = inputArea.value;

    try {

        const jsonData = JSON.parse(jsonText);

        const minifiedJson = JSON.stringify(jsonData);

        outputArea.value = minifiedJson;

        copyButton.disabled = false;

        messageArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        messageArea.textContent =
            "JSON形式が正しくありません。";

    }

});

copyButton.addEventListener("click", async () => {

    const outputText = outputArea.value.trim();
    console.log("コピー対象:", outputText);
    if (!outputText) {
        messageArea.textContent =
            "コピーする内容がありません。";
        return;
    }

    try {

        await navigator.clipboard.writeText(outputText);

        messageArea.textContent =
            "コピーしました。";

    } catch (error) {

        messageArea.textContent =
            "コピーに失敗しました。";

    }

});