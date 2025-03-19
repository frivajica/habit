CREATE TABLE "questions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "questions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"space_id" integer,
	"title" varchar(255) NOT NULL,
	"description" varchar(400),
	"user_id" integer,
	"madeAt" timestamp DEFAULT now() NOT NULL,
	"lastModifiedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "records" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "records_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"question_id" integer,
	"user_id" integer,
	"value" boolean NOT NULL,
	"madeAt" timestamp DEFAULT now() NOT NULL,
	"lastModifiedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"user_id" integer,
	"madeAt" timestamp DEFAULT now() NOT NULL,
	"lastModifiedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar" varchar(1200),
	"madeAt" timestamp DEFAULT now() NOT NULL,
	"last_modified_at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "users_to_spaces" (
	"user_id" integer NOT NULL,
	"space_id" integer NOT NULL,
	CONSTRAINT "users_to_spaces_user_id_space_id_pk" PRIMARY KEY("user_id","space_id")
);
--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_space_id_spaces_id_fk" FOREIGN KEY ("space_id") REFERENCES "public"."spaces"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "records_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "records_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users_to_spaces" ADD CONSTRAINT "users_to_spaces_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users_to_spaces" ADD CONSTRAINT "users_to_spaces_space_id_spaces_id_fk" FOREIGN KEY ("space_id") REFERENCES "public"."spaces"("id") ON DELETE no action ON UPDATE no action;