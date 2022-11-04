/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export default function themeTypography(theme) {
    return {
        fontFamily: ['"Source Sans Pro"', 'Mulish'].join(','),
        flex: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
   
    };
}
