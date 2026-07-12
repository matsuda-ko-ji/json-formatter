const inputArea = document.getElementById("json-input");
const outputArea = document.getElementById("json-output");
const formatButton = document.getElementById("format-button");
const minifyButton = document.getElementById("minify-button");
const copyButton = document.getElementById("copy-button");
const messageArea = document.getElementById("message-area");
const clearButton = document.getElementById("clear-button");

// 整形ボタンの処理
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

        copyButton.disabled = false;

        messageArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        copyButton.disabled = true;

        messageArea.textContent =
            "JSON形式が正しくありません。";

    }

});

// 圧縮ボタンの処理
minifyButton.addEventListener("click", () => {

    const jsonText = inputArea.value.trim();

    try {

        const jsonData = JSON.parse(jsonText);

        const minifiedJson = JSON.stringify(jsonData);

        outputArea.value = minifiedJson;

        copyButton.disabled = false;

        messageArea.textContent = "";

    } catch (error) {

        outputArea.value = "";

        copyButton.disabled = true;

        messageArea.textContent =
            "JSON形式が正しくありません。";

    }

});

// コピーボタンの処理
copyButton.addEventListener("click", async () => {

    const outputText = outputArea.value.trim();

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

// クリアボタンの処理
clearButton.addEventListener("click", () => {

    const hasInput =
        inputArea.value ||
        outputArea.value;

    if (!hasInput) {
        return;
    }

    const confirmed = confirm(
        "入力内容と結果を削除しますか？"
    );

    if (!confirmed) {
        return;
    }

    inputArea.value = "";

    outputArea.value = "";

    messageArea.textContent = "";

    copyButton.disabled = true;

});