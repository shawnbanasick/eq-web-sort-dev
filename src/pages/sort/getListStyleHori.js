// horizontal column styling
const getListStyleHori = (isDraggingOver, horiCardMinHeight) => ({
  background: isDraggingOver ? "lightblue" : "#e4e4e4",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  width: "100vw",
  paddingRight: "20px",
  minHeight: horiCardMinHeight,
  overflowX: `scroll`,
  direction: `rtl`,
  scrollBehavior: `smooth`,
});

export default getListStyleHori;
