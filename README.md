jQuery Mobile Rails
===================

This gem provides the jQuery Mobile assets for Rails 3.1 and greater. The files will be added to the asset pipeline and available for you to use. It follows the lead of other jQuery gems in exposing a vendored asset directory.

Full details about jQuery Mobile can be found on the JQM website itself:

http://jquerymobile.com/

This gem is intended to support the latest stable and candidate releases. The current jQuery Mobile version is:

    v1.3.0-beta.1 release

### Installation

In your Gemfile, add this line:

    gem "jquery_mobile-rails"

You can include it by adding the following to your javascript and stylesheet files:

    //= require jquery_mobile

### Multi-Page Template Support Patch

The following patch (ugly hack) was applied to `startIn()` initialization to fix mass selection ui breakdown:

    startIn = function() {
      ...
      var hasMultiplePagesAssigned = $to.length > 1
      if (hasMultiplePagesAssigned) $to.splice(1, $to.length-1)
      ...
    }

### License

The jQuery Mobile Rails Gem is published under the New BSD license.

Originally developed for Earlydoc health management apps: 

http://www.earlydoc.com
    