# Chatango HTML Mini Overlay #

[Chatango](http://chatango.com) is a basic chat site, with a user interface
based around HTML5 and JavaScript. However, before the HTML5/JS interface
was created, the interface was made with Flash.  
This version had one major feature. Many user still use the outdated Flash
version because this feature is missing from the new version.  
The feature is a simple overlay, which appears near the cursor when
you hover over another user's profile picture. This overlay would show
information about the user. Their age, gender, location, and a small description
would appear here if they added it to their profile. As well as an enlarged
version of their thumbnail.

I was bored one day, and decided to figure out how to make a UserScript.
I decided to try to make my own overlay for the HTML5 chat, to fill in for
the one that was not added by the developers (yet, probably).

## IMPORTANT NOTES ##
I __do not__ claim this script to be perfect, never have bugs, and work for
every user's mini profile. It does not, and the amount of work required to
make sure every mini fits is not even worth it, if even possible, and would
create more bugs that would have to be fixed. And in fixing those bugs, other
stuff will break. I will make attempts to improve it over time, but I will not
try for perfection, unless I find a new method which works perfectly.

I cannot anticipate what users may put on their profile, and I am not sure
to what extent Chatango filters the profile text. The script will try it's best
to remove any (potentially) harmful code from the profile before showing it.
If you do find a security bug with this, __PLEASE__ let me know immediately
so I can get out a fix as soon as possible.

Not all profiles will work with this. However, it supports __far more__ than
the official flash version does, and shows each profile in more detail.

This is not intended to be an entire profile viewer in the first place. It is
meant to be more of a preview. A much larger preview than the flash version
provides.

This is an early release. I tried to squash any bugs I could find, but I am
sure there will be some that I missed, or that I never noticed, or that only
happens on a browser I did not test on.  
If you find a bug, or have a suggestion. Please post a new issue.  

If you know your way around JavaScript, HTML, and CSS. Feel free to edit your
local copy of the script to match the colors, design, etc. to match your
preferences.  
I do plan to make many of the aspects configurable, with time.

Because of the strange way Chatango stores the user's age, it's highly possible
that the number shown may be off by a year. This will be fixed in the future.

## Benefits over the flash version ##
- The overlay will automatically scale to fit the window and content. If your
window is wide and tall, the overlay will be wider, and the maximum height will
be taller.
- More of the user's mini profile will be shown. The content shrinks to fit
smaller windows. It however, does not grow to fill the entire possible area.
- The profile image shown is the user's full image, not the thumbnail, and
scales to the original dimensions. Unless you have high-speed/fiber/etc.
internet, this __will__ cause a slower loading time on the images.

## Reporting bugs ##
If you do find a bug, please let me know about it by posting a new issue.  
When posting an issue, include the name and version (if possible) of your
browser, as well as the name of the UserScript manager (GreaseMonkey,
TamperMonkey, etc.) that you are using.

## Suggestion? Questions? Feedback? ##
Many users have no idea how important these can be to a developer!

You can post an issue for suggestions, questions, and feedback alike. They
don't need to be actual issues!  
It's recommended to tag these, but if you don't know how, that's perfectly
fine. Better to post it with no tags than to not post it at all.

If you'd rather not post a public issue, I'd be glad to hear your
feedback/questions/suggestions. Send me a Private Message on Chatango, my
main account is [Hazerd](http://hazerd.chatango.com). I always keep this
account on the chatango app, so I get instant notifications. If I don't reply
right away, I'll get to it as soon as I have a chance. If it's been a while,
just try re-sending the message. Odds are I just never got it.

# Installation #

1. Install a UserScript manager for your browser.
2. [GreaseMonkey](http://www.greasespot.net/) and
[TamperMonkey](http://tampermonkey.net/) are two popular choices.
3. Visit the [Greasy Fork Page](https://greasyfork.org/en/scripts/13044-chatango-html-mini-overlay)
and click the Green "Install this script" button.
4. This step varies on your manager. But generally, there should be a
button to Install the script.
