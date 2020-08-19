import React from "react";

function Quotes({ color, height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
    >
      <path d="M75.497 87.588C86.268 87.588 95 78.855 95 68.084s-8.732-19.502-19.503-19.502c-.232 0-6.279.034-6.279.034.153-10.869 7.646-19.99 17.738-22.613a55.73 55.73 0 012.123-.473A6.572 6.572 0 0095 18.992c0-3.288-2.422-6.003-5.574-6.485-.033-.006-.066-.008-.099-.016a6.892 6.892 0 00-.458-.045c-.074-.004-.145-.021-.22-.021 0 0-.789-.025-1.05-.004-1.165.098-1.529.246-2.281.404-16.618 3.49-29.156 18.187-29.315 35.791h-.01v19.556l.005-.004c.045 10.732 8.755 19.42 19.499 19.42zM5.005 68.168c.045 10.732 8.756 19.42 19.499 19.42 10.771 0 19.503-8.732 19.503-19.504 0-10.771-8.732-19.502-19.503-19.502-.231 0-6.278.034-6.278.034.152-10.869 7.646-19.99 17.737-22.613.68-.176 2.103-.471 2.123-.473a6.572 6.572 0 005.921-6.538c0-3.288-2.422-6.003-5.574-6.485-.032-.006-.065-.008-.099-.016a6.797 6.797 0 00-.457-.045c-.074-.004-.145-.021-.221-.021 0 0-.788-.025-1.049-.004-1.166.098-1.53.246-2.282.404C17.707 16.315 5.169 31.012 5.01 48.616H5v19.556l.005-.004z"></path>
    </svg>
  );
}

export default Quotes;
