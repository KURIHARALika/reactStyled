export const StyledJsx = () => {
  return (
    <>
      <div className="contener">
        <p className="title"> -Styled jsx- -karasuno</p>
        <button className="button">HINATA</button>
      </div>
      <style jsx="true">{`
        .contener {
          border: solid 2px #fcb900;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 8px;
          color: #ff9a00;
          font-weight: bold;
        }
        .button {
          background-color: #fcc14e;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #f7ac1a;
            color: bisque;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
