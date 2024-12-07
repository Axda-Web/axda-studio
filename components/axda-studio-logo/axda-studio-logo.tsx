import Link from "next/link";

import { URLS } from "@/constants/nav";

export function AxdaStudioLogo() {
  return (
    <Link href={URLS.HOME}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle cx="24" cy="24" r="24" className="fill-foreground" />
        <path
          d="M17.2832 17.3881C17.6656 16.7088 18.6437 16.7088 19.026 17.3881L25.9711 29.7258C26.3464 30.3924 25.8647 31.2164 25.0997 31.2164H11.2095C10.4446 31.2164 9.96286 30.3924 10.3381 29.7258L17.2832 17.3881Z"
          className="fill-background"
        />
        <path
          d="M25.5865 16.8454C25.5865 16.5732 25.8071 16.3525 26.0793 16.3525H30.9682C35.0727 16.3525 38.4 19.6799 38.4 23.7844C38.4 27.8889 35.0727 31.2163 30.9682 31.2163H25.8377C25.699 31.2163 25.5865 31.1038 25.5865 30.965V16.8454Z"
          className="fill-background"
        />
      </svg>
    </Link>
  );
}
