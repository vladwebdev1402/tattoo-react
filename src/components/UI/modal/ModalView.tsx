import React, { FC, useEffect } from "react";
import st from "./ModalView.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const ModalView: FC<Props> = ({ className = "", children, ...props }) => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    html.className += ` ${st.stopScroll}`;

    return () => {
      html.className = html.className.replace(` ${st.stopScroll}`, "");
    };
  }, []);

  return (
    <div className={`${st.modal} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ModalView;
