CREATE TABLE `contactsTable` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`url` text NOT NULL,
	`copy` text
);
--> statement-breakpoint
CREATE TABLE `experiencesTable` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`institution` text NOT NULL,
	`img` text NOT NULL,
	`type` text,
	`start` text,
	`end` text,
	`location` text NOT NULL,
	`description` text NOT NULL,
	`src` text,
	`skills` text NOT NULL
);
