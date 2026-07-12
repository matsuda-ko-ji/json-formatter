const inputArea = document.getElementById("json-input");
const outputArea = document.getElementById("json-output");
const formatButton = document.getElementById("format-button");
const minifyButton = document.getElementById("minify-button");
const copyButton = document.getElementById("copy-button");
const clearButton = document.getElementById("clear-button");
const messageArea = document.getElementById("message-area");

const PRETTY_PRINT_INDENT = 2;

formatButton.addEventListener("click", () => {
    convertJson(PRETTY_PRINT_INDENT);
});

minifyButton.addEventListener("click", () => {
    convertJson(0);
});

copyButton.addEventListener("click", copyOutput);

clearButton.addEventListener("click", clearAll);

inputArea.addEventListener("input", () => {
    resetOutput();
    clearMessage();
});

/**
 * 入力されたJSONを解析し、整形または圧縮して出力する。
 *
 * @param {number} indentation インデント幅
 */
function convertJson(indentation) {
    const jsonText = inputArea.value.trim();

    if (!jsonText) {
        resetOutput();
        showMessage("JSONを入力してください。", "error");
        inputArea.focus();
        return;
    }

    try {
        const jsonData = JSON.parse(jsonText);
        const convertedJson = JSON.stringify(
            jsonData,
            null,
            indentation
        );

        outputArea.value = convertedJson;
        copyButton.disabled = false;
        clearMessage();
    } catch {
        resetOutput();
        showMessage("JSON形式が正しくありません。", "error");
    }
}

/**
 * 出力結果をクリップボードへコピーする。
 */
async function copyOutput() {
    const outputText = outputArea.value;

    if (!outputText) {
        showMessage("コピーする内容がありません。", "error");
        return;
    }

    try {
        await navigator.clipboard.writeText(outputText);
        showMessage("コピーしました。", "success");
    } catch {
        showMessage("コピーに失敗しました。", "error");
    }
}

/**
 * 入力内容と出力結果を削除する。
 */
function clearAll() {
    const hasContent = inputArea.value || outputArea.value;

    if (!hasContent) {
        return;
    }

    const confirmed = window.confirm(
        "入力内容と結果を削除しますか？"
    );

    if (!confirmed) {
        return;
    }

    inputArea.value = "";
    resetOutput();
    clearMessage();
    inputArea.focus();
}

/**
 * 出力欄とコピーボタンを初期状態へ戻す。
 */
function resetOutput() {
    outputArea.value = "";
    copyButton.disabled = true;
}

/**
 * メッセージを表示する。
 *
 * @param {string} message 表示するメッセージ
 * @param {"success" | "error"} type メッセージ種別
 */
function showMessage(message, type) {
    messageArea.textContent = message;
    messageArea.className = `message message--${type}`;
}

/**
 * メッセージを削除する。
 */
function clearMessage() {
    messageArea.textContent = "";
    messageArea.className = "message";
}