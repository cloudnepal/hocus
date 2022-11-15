import { Type as t } from "@sinclair/typebox";

export const TaskSchema = t.Object({
  name: t.String({ minLength: 1, maxLength: 255, description: "Name of the task" }),
  init: t.String({ minLength: 1, description: "Shell command to run during the prebuild phase" }),
  command: t.String({
    minLength: 1,
    description: "Shell command to run after the workspace is started",
  }),
});

export const ProjectConfigSchema = t.Object({
  image: t.Object({
    file: t.String({
      minLength: 1,
      description:
        "Path to a Dockerfile which will be used to build the filesystem for the project",
    }),
    buildContext: t.String({
      minLength: 1,
      description:
        "Path to the directory used as Docker build context, relative to repository root",
    }),
  }),
  tasks: t.Array(TaskSchema),
});