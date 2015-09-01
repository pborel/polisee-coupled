# PoliSee

Empowers citizens by connecting them with issues they care about and the representatives who vote on them. Built with React and Rails by @mikey2XU, @d0ntg0m0ng, @posthumus4, @emiliocorprus, @pborel.

## Set Up
Ruby version: 2.2.0

How to change Ruby version: http://makandracards.com/makandra/21545-rbenv-how-to-switch-to-another-ruby-version-temporarily-per-project-or-globally

```$ rbenv global 2.2.0

$ ruby -v

ruby 2.2.0```


## Basic UI Layout - Wireframe:

![Polisee Wireframe](./public/imgs/polisee-wireframe.png "polisee-wireframe")


## Oauth - Twitter
### 3-legged authorization
The 3-legged OAuth flow allows your application to obtain an access token by redirecting a user to Twitter and having them authorize your application. This flow is almost identical to the flow described in Implementing Sign in with Twitter, with two exceptions:

The GET oauth/authorize endpoint is used instead of GET oauth/authenticate
The user will always be prompted to authorize access to your application, even if access was previously granted.
The possible states for the 3-legged sign in interaction are illustrated in the following flowchart:

![Twitter Oauth Flow](./public/imgs/twitter-oauth-flow.png "Twitter Oauth Flow")

## Tutorials:
### Decoupled Rails / React & Twitter integration
https://richonrails.com/articles/sending-a-tweet-to-twitter

http://fredguest.com/2015/03/06/building-a-stateless-rails-api-with-react-and-twitter-oauth/


