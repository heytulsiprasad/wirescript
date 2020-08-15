import React from "react";

function Icon({ color, height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 298 217"
      fill={color}
    >
      <path
        d="M4 2157c-2-7 21-67 52-133 31-65 222-472 424-904s394-839 425-905 66-141 77-167c11-27 24-48 28-48s17 19 28 43c59 124 129 271 161 342 21 44 65 139 100 210 34 72 90 191 124 265 35 74 69 135 76 135 13 0 50-77 269-550 33-72 83-179 112-240 28-60 60-131 72-156 23-54 36-55 60-1 14 32 270 587 375 812 19 41 104 224 188 405 84 182 209 453 279 603 69 149 126 277 126 282 0 6-28 10-63 10-63 0-63 0-81-37-10-21-107-229-216-463-108-234-211-454-227-490-169-362-368-792-381-822-9-21-20-38-25-38-4 0-19 24-31 53-13 28-49 105-80 171-31 65-56 119-56 121 0 1-26 58-59 126-32 68-67 144-79 169-11 25-39 85-61 133l-41 88 126 272c70 150 153 328 185 396 33 68 59 125 59 127s20 44 45 95c25 50 42 95 39 100-8 14-108 11-127-3-9-7-62-112-117-233-56-121-124-267-151-324s-49-105-49-106c0-2-17-40-39-84-29-61-41-78-49-69-5 7-60 123-122 258-61 135-125 274-142 310s-46 101-65 145c-20 44-40 86-45 93-12 14-134 17-142 3-3-4 62-154 145-332s167-358 186-399 53-114 75-163l41-87-56-118c-31-64-86-180-123-257-36-77-91-192-121-255s-66-139-80-169c-21-45-27-51-38-40-7 8-84 165-170 349-87 184-186 395-221 469-35 73-64 135-64 136s-27 61-61 131c-34 71-92 194-129 274s-97 207-134 284c-36 76-66 143-66 147 0 5-9 18-20 29-16 16-33 20-80 20-41 0-62-4-66-13z"
        transform="matrix(.1 0 0 -.1 0 217)"
      ></path>
    </svg>
  );
}

export default Icon;