function copyOutput() {
    const outputBox = document.getElementById("asciiOutput")

    if (!outputBox) {
        console.log("No output box found!");
        return;
    }

    const text = outputBox.innerText

    navigator.clipboard.writeText(text)
        .then (() => {
            const btn = document.getElementById("copyBtn");
            btn.innerText = "Copied!";

            setTimeout (() => {
                btn.innerText = "Copy Output";
            }, 1500);
        })
        .catch(err => {
            console.error("Copy Failed :",err)
        });
}