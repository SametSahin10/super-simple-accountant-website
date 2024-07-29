import Typography from "typography"
const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  bodyFontFamily: ["Josefin Sans"],
  bodyWeight: 400,
  boldWeight: 600,
  headerFontFamily: ["Josefin Sans"],
  headerLineHeight: 1,
  headerWeight: 500,
  scaleRatio: 3.5,
  overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
    h6: {
      ...adjustFontSizeTo("14px"),
    },
  }),
})

export default typography
