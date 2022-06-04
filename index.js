function onGeneratePasswordBtnClicked() {
    activeFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");
}

function onOrganizedBtnClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    activeFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");
}

function onPhoneBtnClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    activeFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");
}

function onBiometricsClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    activeFeatureBtn("feature-button-biometrics");
}

function activeFeatureBtn(id) {
    let button = document.getElementById(id);
    button.className = "feature-button active";
    button.firstElementChild.className.baseVal = "feature-button-image active";
    button.lastElementChild.className = "feature-button-text active";
}

function deactivateFeatureBtn(id) {
    let button = document.getElementById(id);
    button.className = "feature-button";
    button.firstElementChild.className.baseVal = "feature-button-image";
    button.lastElementChild.className = "feature-button-text";
}
