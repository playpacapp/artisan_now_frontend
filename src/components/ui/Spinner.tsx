import { FC } from "react";

type Props = {
  loading?: boolean;
  text?: string;
  color?: string;
  size?: string | number;
  fullscreen?: boolean;
};

export const Spinner: FC<Props> = ({
  text = "",
  color = "bg-brown-800",
  size = 40,
  loading = true,
  fullscreen = true,
}) =>
  loading ? (
    <div
      className={`mtrade-loading ${fullscreen ? "fullscreen" : ""}`}
      style={{
        width: '30px',
        height: '20px'
      }}
    >
      <span className="spinner"></span>
    </div>
  ) : null;
  