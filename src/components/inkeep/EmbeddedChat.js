import * as React from "react"
import { useState, useEffect } from "react"


const InkeepEmbeddedChatSettings = {
  stylesheetUrls: ["/inkeep.css"],
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
              base: "expand",
              md: "expand",
            },
          },
        },
      },
    },
  },
}

export const EmbeddedChat = () => {
  const [EmbeddedChat, setEmbeddedChat] = useState(null)

  useEffect(() => {
    (async () => {
      const { InkeepEmbeddedChat } = await import("@inkeep/widgets")
      setEmbeddedChat(() => InkeepEmbeddedChat)
    })()
  }, [])

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
      {EmbeddedChat ? (
          <EmbeddedChat {...InkeepEmbeddedChatSettings} />
        ) : (
          <div />
        )
      }
    </div>
  )
}
