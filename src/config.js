import { getScaledValue, isEngineWeb, isFactorMobile, isFactorDesktop,
    isFactorTv, isEngineNative, isFactorBrowser, registerServiceWorker, StyleSheet } from 'renative';
import '../platformAssets/runtime/fontManager'; // eslint-disable-line import/extensions, import/no-unresolved

import { white } from './constants/colors';

export CONFIG from '../platformAssets/renative.runtime.json'; // eslint-disable-line import/no-unresolved
export ICON_LOGO from '../platformAssets/runtime/logo.png'; // eslint-disable-line import/no-unresolved

if (isFactorBrowser) registerServiceWorker();

export const hasMobileWebUI = isFactorMobile && isEngineWeb;
// export const hasHorizontalMenu = !isFactorMobile && !isFactorDesktop && !hasMobileWebUI;
export const hasHorizontalMenu = false;
export const hasFullScreenMenu = hasMobileWebUI;
export const hasVerticalMenu = !hasHorizontalMenu && !hasFullScreenMenu;
export const hasWebFocusableUI = isEngineWeb && isFactorTv;

export const apiUrl = '';
export const username = '';

const theme = {
    color0: '#111111',
    color1: '#222222',
    color2: '#62DBFB',
    color3: '#FB8D62',
    color4: '#FFFFFF',
    color5: '#AAAAAA',
    yellow: '#EFE514',
    white: '#FFFFFF',
    primaryFontFamily: 'RobotoCondensed-Regular',
    iconSize: getScaledValue(40),
    iconSizeMedium: getScaledValue(30),
    iconSizeSmall: getScaledValue(20),
    menuWidth: hasHorizontalMenu || hasFullScreenMenu ? '100%' : getScaledValue(180),
    menuHeight: hasHorizontalMenu ? getScaledValue(80) : '100%',
    statusBar: 'light-content'
};

export const themeStyles = StyleSheet.create({
    app: {
        flexDirection: isFactorDesktop ? 'row' : 'column', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
    },
    appContainer: {
        position: 'absolute',
        left: hasVerticalMenu ? getScaledValue(180) : 0,
        right: 0,
        top: hasHorizontalMenu ? getScaledValue(80) : 0,
        bottom: 0
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: getScaledValue(50),
        minHeight: getScaledValue(300),
        alignSelf: 'stretch',
        width: '100%'
    },
    modalContainer: isEngineWeb ? {
        position: 'absolute',
        backgroundColor: theme.color1,
        zIndex: 100,
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%'
    } : {
        flex: 1,
        backgroundColor: theme.color1
    },
    textH2: {
        fontFamily: theme.primaryFontFamily,
        fontSize: getScaledValue(20),
        marginHorizontal: getScaledValue(20),
        marginVertical: getScaledValue(12),
        color: white,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textH3: {
        fontFamily: theme.primaryFontFamily,
        fontSize: getScaledValue(15),
        marginHorizontal: getScaledValue(20),
        marginTop: getScaledValue(5),
        color: white,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textH4: {
        fontFamily: theme.primaryFontFamily,
        fontSize: getScaledValue(10),
        marginHorizontal: getScaledValue(20),
        marginTop: getScaledValue(5),
        color: white,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    text: {
        fontFamily: theme.primaryFontFamily,
        color: theme.color4,
        fontSize: getScaledValue(20),
        marginTop: getScaledValue(10),
        textAlign: 'left',
    },
    icon: {
        width: getScaledValue(1),
        height: getScaledValue(1),
        margin: getScaledValue(10),
    },
    button: {
        marginHorizontal: getScaledValue(20),
        borderWidth: getScaledValue(2),
        borderRadius: getScaledValue(25),
        borderColor: theme.color2,
        height: getScaledValue(50),
        minWidth: getScaledValue(150),
        maxWidth: getScaledValue(180),
        marginTop: getScaledValue(20)

    },
    buttonText: {
        fontFamily: theme.primaryFontFamily,
        color: theme.color2,
        fontSize: getScaledValue(20),
    },
    screen: {
        position: 'absolute',
        backgroundColor: theme.color1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    screenModal: {
        position: 'absolute',
        backgroundColor: theme.color1,
        top: hasHorizontalMenu && isEngineWeb ? -theme.menuHeight : 0,
        left: hasHorizontalMenu || hasFullScreenMenu || isEngineNative ? 0 : -theme.menuWidth,
        right: 0,
        bottom: 0
    },
    headerTitle: {
        color: theme.color3,
        fontFamily: theme.primaryFontFamily,
        fontSize: getScaledValue(18)
    },
    header: {
        backgroundColor: theme.color1,
        borderBottomWidth: 1,
        height: getScaledValue(70)
    },
    modalHeader: {
        width: '100%',
        height: getScaledValue(80),
        alignItems: 'flex-end',
        paddingTop: getScaledValue(20)
    },
    image: {
        marginBottom: getScaledValue(30),
        width: getScaledValue(83),
        height: getScaledValue(97),
    }
});

export const ROUTES = {
    HOME: '/',
    ROOMS: 'rooms',
    LIGHTS: 'lights',
    SETTINGS: 'settings',
    DETAILS: 'details',
    MODAL: 'modal',
    EXIT: 'exit',
};

export const allGroups = false;
export const groupLights = false;

export default theme;
