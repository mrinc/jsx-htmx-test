// /// <reference path="../../node_modules/jsx-htmx/src/index.d.ts" />
/** @jsx createElement */
/** @jsxFrag Fragment */
/** @jsxImportSource jsx-htmx/src */
import { createElement } from "jsx-htmx/lib";
import { Fragment } from "jsx-htmx/lib/jsx-runtime";
import * as React from "jsx-htmx";

import { CustomComponent } from "../jsTypeSafety";

export function MyComponent({ children }: any) {
  return <div hx-get="/asd">{children}</div>;
  //          ^?: string | undefined
}

export const Container: CustomComponent<{ path: string | null }> = (props) => {
  return (
    <div class="content-wrapper">
      <div
        class="bp-content-loader content-loading"
        hx-ext="bp-request-headers"
        data-loading-class="content-loading"
        data-bp-content-loader-hide="d-none"
        data-bp-content-loader-content="#bp-content"
        data-bp-content-loader-401="#bp-errors-401"
        data-bp-content-loader-403="#bp-errors-403"
        data-bp-content-loader-404="#bp-errors-404"
        data-bp-content-loader-500="#bp-errors-500"
      >
        <div class="bp-content-loader-container">
          {/* <Errors401
            id="bp-errors-401"
            themeID={props.themeID}
            baseURL={props.baseURL}
            currentPath={props.currentPath}
            app={props.app}
            tenant={props.tenant}
          ></Errors401>
          <Errors403
            id="bp-errors-403"
            themeID={props.themeID}
            baseURL={props.baseURL}
            currentPath={props.currentPath}
            app={props.app}
            tenant={props.tenant}
          ></Errors403>
          <Errors404
            id="bp-errors-404"
            themeID={props.themeID}
            baseURL={props.baseURL}
            currentPath={props.currentPath}
            app={props.app}
            tenant={props.tenant}
          ></Errors404>
          <Errors500
            id="bp-errors-500"
            themeID={props.themeID}
            baseURL={props.baseURL}
            currentPath={props.currentPath}
            app={props.app}
            tenant={props.tenant}
          ></Errors500> */}
          <div
            hx-history-elt
            hx-ext="bp-request-headers"
            id="bp-content"
            hx-boost="false"
            hx-get={props.path !== null ? props.path : undefined}
            hx-trigger={props.path !== null ? "load" : undefined}
          >
            <div class="misc-wrapper">
              <h3 style="font-size: 4rem">LOADING...</h3>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export const render: CustomComponent = (props) => {
  //return <div hx-get="/asd"></div>;
  //const routeService = {} as any;
  return (
    <Container
      themeID={props.themeID}
      baseURL={props.baseURL}
      currentPath={props.currentPath}
      app={props.app}
      tenant={props.tenant}
      path={null}
    >
      <div class="test-div">
        <MyComponent>
          <h1>Test</h1>
        </MyComponent>
      </div>
    </Container>
  );
};
