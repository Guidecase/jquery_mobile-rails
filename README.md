jQuery Mobile Rails
===================

This gem provides the jQuery Mobile assets for Rails 3.1 and greater. The files will be added to the asset pipeline and available for you to use. It follows the lead of other jQuery gems in exposing a vendored asset directory.

Full details about jQuery Mobile can be found on the JQM website itself:

http://jquerymobile.com/

This gem is intended to support the latest stable and candidate releases. The current jQuery Mobile version is:

    v1.3.0-rc1 release

### Installation

In your Gemfile, add this line:

    gem "jquery_mobile-rails"

You can include it by adding the following to your javascript and stylesheet files:

    //= require jquery_mobile

### Multi-Page Template Support

The native multi-page layouy functionality can trigger various issues when combined with normal single-page PJAX templates. Include the separate support file containing necessary fixes (before the JQM script!) in order to run a site with both multi- and single-page layouts. e.g.

    //= require jquery_mobile_multipage_support
    //= require jquery_mobile

### Usage

This gem also exposes jQuery Mobile exception handling through declarative HTML elements. To specify a message override, include the separate exception handling file (before the JQM script!).

    //= require jquery_mobile_multipage_support
    //= require jquery_mobile

Then add an element with the id `jquery-exceptions` to your page:

    <div id="jquery-exceptions" class="hidden">Ouch, an error!</div>

### License

The jQuery Mobile Rails Gem is published under the New BSD license.

Originally developed for Earlydoc health management apps: 

http://www.earlydoc.com
    