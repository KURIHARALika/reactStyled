export const InlineStyle = () => {
  const contenerStyle = {
    border: "solid 2px  #db3e00",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "8px",
    color: "#120101"
  };
  const buttonStyle = {
    backgroundColor: "#e97e54",
    // border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={contenerStyle}>
      <>
        <p style={titleStyle}> -INLINE STYLE- -nekoma</p>
        <button style={buttonStyle}>KUROO</button>
      </>
    </div>
  );
};
