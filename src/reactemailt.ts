import { renderAsync } from "@react-email/render";

export type GeneratedMail = {
  subject: string;
  plain: string;
  html: string;
  text: string | null;
};

export abstract class ReactEmailTemplate {
  constructor() {}
  public abstract handler(lang: string, meta: any): Promise<GeneratedMail>;
  public static async render(
    subject: string,
    text: string | null,
    template: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  ) {
    return {
      subject,
      html: await renderAsync(template, { pretty: true }),
      plain: await renderAsync(template, { plainText: true }),
      text,
    };
  }
}
