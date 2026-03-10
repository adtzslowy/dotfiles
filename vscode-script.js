(function () {
    const apply = () => {
        document.body.classList.add('adit-minimal-vscode');
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", apply);
    } else {
        apply();
    }
})();
