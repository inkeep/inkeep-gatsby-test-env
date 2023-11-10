import * as React from "react"
import { InkeepEmbeddedChat } from "@inkeep/widgets"

// background-color: var(--ikp-colors-inkeep-primary-lighter);

// const styles = `
//   .ikp-tagline {
//     display: none;
//   }

//   .ikp-ai-chat-page-wrapper {
//     color: #4c4a57;
//     line-height: 1.5em;
//   }

//   .ikp-content-parser__code {
//     background: #fafafa;
//     background-color: #fafafa;
//     border: 1px solid #e6e5ea;
//     color: #1b1a21;
//     border-radius: 4px;
//     font-style: mono;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 1em;
//     padding-top: 2px;
//     padding-bottom: 2px;
//   }

//   .ikp-content-parser__sup a {
//     background: rgb(236, 199, 255);
//     color: rgb(136, 0, 204);
//     padding: 1px 4px;
//     border-radius: 4px;
//     font-weight: bold;
//   }

//   .ikp-codeblock-header {
//     background: #fafafa;
//     border: 1px solid #e6e5ea;
//     color: #4c4a57;
//   }

//   .ikp-codeblock-header button {
//     color: #777582;
//   }

//   .ikp-codeblock-header button:hover {
//     color: #4c4a57;
//   }

//   .ikp-codeblock-highlighter {
//     background-color: #f3f3f5 !important;
//     color: #1b1a21;
//     border: 1px solid #e6e5ea;
//     border-top: none;
//     line-height: 1.4em;
//   }
// `;
// const stylesheets = [<style key="inkeep-overrides">{styles}</style>];

const InkeepEmbeddedChatSettings = {
  // stylesheets,
  stylesheetUrls: ['/inkeep.css'],
  baseSettings: {
    apiKey: process.env.REACT_APP_INKEEP_INTEGRATION_API_KEY || "",
    integrationId: process.env.REACT_APP_INKEEP_INTEGRATION_ID || "",
    organizationId: process.env.REACT_APP_INKEEP_ORGANIZATION_ID || "",
    organizationDisplayName: "Inkeep",
    primaryBrandColor: "#26D6FF",
    theme: {
      components: {
        AIChatPageWrapper: {
          defaultProps: {
            size: {
              base: 'expand',
              md: 'expand',
            },
          },
        },
      },
    },
  },
};

export const EmbeddedChat = () => {
  return (
    <div
      style={{
        position: "relative",
        flexGrow: 5,
        alignSelf: "stretch",
        maxHeight: "800px",
        height: "100%",
      }}
    >
      <InkeepEmbeddedChat {...InkeepEmbeddedChatSettings} />
    </div>
  );
};
