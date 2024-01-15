export const MenuButton = () => (
  <div className="group">
    <div>
      <a href="javascript:void(0)">
        <svg
          className="stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50px"
          height="8px"
          viewBox="0 0 50 8"
        >
          <line
            className={"group-hover:[stroke-dashoffset:0]"}
            x1="0"
            y1="0.5"
            x2="50"
            y2="0.5"
          ></line>
          <line
            className={"group-hover:[stroke-dashoffset:0]"}
            x1="50"
            y1="7.5"
            x2="0"
            y2="7.5"
          ></line>
        </svg>
      </a>
    </div>
  </div>
);
