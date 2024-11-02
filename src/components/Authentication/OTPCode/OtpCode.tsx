import React from "react";

interface Props {
  openModal: boolean;
  setOpenModal: any;
  message: string;
}

const OtpCode: React.FC<Props> = ({ openModal, setOpenModal, message }) => {
  return (
    <div className="mx-auto flex h-screen max-w-2xl items-center justify-center z-40">
      <div className="flex items-center space-x-2 bg-white p-5">
        <input
          type="hidden"
          id="hs-clipboard-tooltip-on-hover"
          value={message}
        />

        <button
          type="button"
          className="js-clipboard-example hs-tooltip font-mono border-gray-200 text-gray-800 hover:bg-gray-50 focus:bg-gray-50 relative inline-flex items-center justify-center gap-x-2 rounded-lg border bg-white px-4 py-3 text-sm shadow-sm [--is-toggle-tooltip:false] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          data-clipboard-target="#hs-clipboard-tooltip-on-hover"
          data-clipboard-action="copy"
          data-clipboard-success-text="Copied"
        >
          {message}
          <span className="border-s ps-3.5">
            <svg
              className="js-clipboard-default size-4 transition group-hover:rotate-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            </svg>

            <svg
              className="js-clipboard-success hidden size-4 rotate-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible bg-gray-900 invisible z-10 hidden rounded-lg px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity"
            role="tooltip"
          >
            <span className="js-clipboard-success-text">Copy</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default OtpCode;
