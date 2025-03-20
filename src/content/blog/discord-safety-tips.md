---
title: Discord Server Safety Tips
date: 2024-12-07
description: idklol
published: false
tags:
  - discord
  - moderation
  - safety
  - guide
---

## Foreword

If you run a **large** and **public** Discord community and would like to
improve your community's safety while not compromising the community or the
ability of legitimate users to join, this document is for you. I'll warn you
though, It's going to start slow, because I've written it assuming you're making
a new server from scratch. Follow along until you notice settings you don't
currently use.

If you just want the instructions, [skip to content](#basic-settings).

---

The goal of this document is to help you protect your community more effectively
_without_ altering the community in ways that make it less enjoyable to be part
of- in other words, these recommendations will not change the experience of
using the server, but they will block as many abusers as possible while not
blocking legitimate users.

Discord's tools for moderation have gotten better over the years, but they leave
much to be desired- for example, the verification levels in
`Server Settings -> Moderation -> Safety Setup -> DM and Spam Protection -> Verification Level`
essentially jump from requiring an email to requiring a valid phone number,
which is non-negotiable for many users. Yes, you _can_ secure your server
against most abuse by enabling phone number verification- but you could also
secure your server by never sending anyone an invite to it. Almost nobody wants
to deal with phone verification if they do not have to- and as a result, most
large public servers do not require phone verification.

<!--shock images by revoking the permission to post images, but regular users want-->
<!--to post harmless images. \-->
<!--You can nearly guarantee that every user is real by requiring phone number-->
<!--verification, but many users do not want to hand any personal information to-->
<!--Discord- let alone their-->

You can guarantee your server is secure by never allowing anyone to join, or
revoking every permission. These are also obviously undesirable. Moderation is
not a perfect system, and cannot prevent all forms of abuse. However, we can
design the permissions of a server to compromise between "nobody may enter or
leave" and "the oldest anarchy server on Discord" without harming the community
itself.

The goal of my recommendations in this document are to minimize the surface area
for attack while not compromising the functionality of the server for normal
users.

## Table of Contents

## Server Settings

All configuration options start in `Server Settings`, found by right clicking
your server icon on the sidebar or left clicking your server's name at the top
of the channel menu. All steps are recommended.

### Enable Community

It is **highly recommended** that you enable Community in
`Server Settings -> Enable Community -> Get Started`. This requires you to
enable **media scanning** and **email verification**, as well as remove "risky
permissions" from `@everyone`. I recommend applying all of these settings
anyway, so having one place to set all of them is convenient.

If you enable community, be aware of the following:

- Enabling Community binds your community to Discord's
  [Community Server Guidelines](https://support.discord.com/hc/en-us/articles/360035969312-Community-Server-Guidelines).
  You are likely already following these.
- Enabling Community will give you access to several more settings in the Safety
  Setup menu of your server settings, but will also merge the AutoMod settings
  into that menu.
- Enabling Community **does not** require you to make the server public, or list
  it in Discovery, or otherwise change the visibility or invite rules of your
  server.

### Safety Setup

- Enable account verification to at least require a verified email:
  `Safety Setup -> DM and Spam Protection -> Verification Level`. It is
  recommended you enable all settings on this menu if they are not already set.
- Require 2FA for mod actions:
  `Safety Setup -> Permissions -> Require 2FA for mod actions`. If any of your
  mods' accounts are compromised, the attacker should still be unable to perform
  mod actions without also acquiring the account's 2 factor codes, which is
  unlikely.
- Enable raid protection: `Safety Setup -> Raid Protection and CAPTCHA`.
- Disable creating threads:
  `Roles -> Default Permissions -> Create Public Threads, Create Private Threads`.
  Anyone being able to create threads on any channel is a moderation nightmare,
  as problems can easily be hidden for days before brought to your attention. As
  an alternative, enable Community and create forum channels.

## Roles & Permissions

### Admin

### Moderator

### Mini-Moderator

### Event Manager

### Muted

### No View

**This is entirely optional, and a bit fiddly thanks to Discord**.

### @everyone

### @everyone copy

**This is optional, but highly recommended.**

## Channel Configs

### Permissions and Roles

Editing the permissions of your server should be as easy as possible. I can't
guide you through the exact steps to set up every category and channel and
permission in your server, but I can provide useful

### Automod

If your server is targeted at 13 and 14 year olds, entirely English speaking,
never swears, never farts, and isn't interesting, you should enable the default
Automod at .

### Further levels of Discord's default verification

Previously, I recommended setting the verification level to at least require a
verified email. There are further levels of verification added onto this, such
as requiring the user to have been on Discord for at least five minutes,
requiring them to be in your server for ten minutes, and requiring a phone
number. You may notice that there is a **massive** leap between the two prior
steps and requiring a phone number. As a moderator, part of your goal should be
to

You may push this as high as requiring a phone number, but many regular users do
not want to provide their phone to Discord and are justified in this.

### Images and Link Embedding

**This option meaningfully alters the server for normal users. Proceed with
caution**.

If your community is under attack, one of the common attacks you'll see is
posting shock images of various kinds.

To prevent this, it is **highly recommended** to disable both image sending and
link embedding in `Roles -> Default Permissions -> Attach Files, Embed Links`.

Both of these are common in all servers, to the point that a server without
images and link embeds is discomfortingly empty.

To safely restore the permission, create a secondary role with a name of your
choice that has no other permissions but those two, and assign it to users you
trust.

In **ma pona pi toki pona**, we happen to still have a previous verification
role- if your server is old enough to have such a role, changing its purpose to
restoring image/link embed permissions is an excellent decision.

A bot can be used to assign a target role after a user has sent a sufficient
number of messages or remained in the server for a sufficient period of time.

### A persistent, specific abuser

If this document was given to you by @gregdan3 or another moderator of **ma pona
pi toki pona**, you are likely aware of a specific abusive user who has targeted
the Toki Pona community at large. We keep track of
[this list](https://gist.github.com/gregdan3/3d030628ed88f6cfff662e393ae91de2)
of their known alts, as well as its corresponding

## Summary

- Enable Community.
- Require at least email verification. Phone verification is safer, but everyone
  hates it.
- Require 2-factor authentication for mod actions.
- Enable raid protection. (I'm not convinced it does anything, but it's not
  terrible.)
- <details><summary>Disable creating threads. Use forum channels instead.</summary>

  Optionally create a role which re-enables threads, assigning it to trusted
  users. I don't recommend allowing threads.
  </details>

- <details><summary>Disable image and link embedding if under attack.</summary>

  Optionally create a role which re-enables these and assign it to trusted
  users. You could use a bot to automatically assign the role after a set time
  or number of posts.
  </details>

- Bots can enforce stronger verification and logging than Discord offers.
  - [YAGPDB](https://yagpdb.xyz/) can respond to joins and throw captchas.
