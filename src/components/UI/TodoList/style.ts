import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const StyledItemWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  border: "1px solid rgba(255,255,255, 0.2)",
  borderRadius: "4px",
  marginBottom: "5px",
  cursor: "pointer",
});
