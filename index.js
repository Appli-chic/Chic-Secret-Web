function onGeneratePasswordBtnClicked() {
    activeFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");

    changeFeatureVisibility('feature-generate-password', true);
    changeFeatureVisibility('feature-organized', false);
    changeFeatureVisibility('feature-phone', false);
    changeFeatureVisibility('feature-biometrics', false);
}

function onOrganizedBtnClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    activeFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");

    changeFeatureVisibility('feature-generate-password', false);
    changeFeatureVisibility('feature-organized', true);
    changeFeatureVisibility('feature-phone', false);
    changeFeatureVisibility('feature-biometrics', false);
}

function onPhoneBtnClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    activeFeatureBtn("feature-button-phone");
    deactivateFeatureBtn("feature-button-biometrics");

    changeFeatureVisibility('feature-generate-password', false);
    changeFeatureVisibility('feature-organized', false);
    changeFeatureVisibility('feature-phone', true);
    changeFeatureVisibility('feature-biometrics', false);
}

function onBiometricsClicked() {
    deactivateFeatureBtn("feature-button-generate-password");
    deactivateFeatureBtn("feature-button-organized");
    deactivateFeatureBtn("feature-button-phone");
    activeFeatureBtn("feature-button-biometrics");

    changeFeatureVisibility('feature-generate-password', false);
    changeFeatureVisibility('feature-organized', false);
    changeFeatureVisibility('feature-phone', false);
    changeFeatureVisibility('feature-biometrics', true);
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

function changeFeatureVisibility(id, isVisible) {
    let feature = document.getElementById(id);

    if(isVisible) {
        feature.className = "feature";
    } else{
        feature.className = "invisible";
    }
}
