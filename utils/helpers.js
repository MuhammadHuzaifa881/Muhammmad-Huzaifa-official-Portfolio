import env from "./env";


export const formatMetaData = data => {
  return {
    ...data,
    title: `${data?.title} | ${env.appName}`,
  };
};