import * as React from 'react';
import { PlasmicCanvasHost, registerComponent, registerGlobalContext } from '@plasmicapp/react-web/lib/host';
import { GlobalContext } from '@/src/components/GlobalContext';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)
registerGlobalContext(GlobalContext, {
  name: "GlobalContext",
  props: { store: "object" },
  providesData: true,
  globalActions: {
    setToken: {
      parameters: [{
        name: "token",
        type: "string"
      }]
    },
    upload: {
      parameters: [{
        name: "token",
        type: "string"
      }, {
        name: "file",
        type: "object"
      }, {
        name: "env",
        type: "string"
      }]
    },
    submitShoulderFollowUpRecord: {
      parameters: [{
        name: "questionaireId",
        type: "string"
      }, {
        name: "result",
        type: "object"
      }, {
        name: "env",
        type: "string"
      }]
    },
    goback: {
      parameters: [
        {
          name: "questionaireId",
          type: "string"
        }, {
          name: "env",
          type: "string"
        }
      ]
    }
  },
  importPath: "@/src/components/GlobalContext",
})


export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
