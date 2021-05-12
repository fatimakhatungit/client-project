(function ($) {
"use strict";



/**
             * Start initial share button and share modal
             */
            $('.item-share-button').on('click', function(){
                $('#share-modal').modal('show');
            });

            
            
            
                        /**
             * End initial share button and share modal
             */

            /**
             * Start initial save button
             */

            // xl view
            $('#item-save-button-xl').on('click', function(){
                $("#item-save-button-xl").addClass("disabled");
                $("#item-save-form-xl").submit();
            });

            $('#item-saved-button-xl').on('click', function(){
                $("#item-saved-button-xl").off("mouseenter");
                $("#item-saved-button-xl").off("mouseleave");
                $("#item-saved-button-xl").addClass("disabled");
                $("#item-unsave-form-xl").submit();
            });

            $("#item-saved-button-xl").on('mouseenter', function(){
                $("#item-saved-button-xl").attr("class", "btn btn-danger rounded text-white");
                $("#item-saved-button-xl").html("<i class=\"far fa-trash-alt\"></i> Remove");
            });

            $("#item-saved-button-xl").on('mouseleave', function(){
                $("#item-saved-button-xl").attr("class", "btn btn-warning rounded text-white");
                $("#item-saved-button-xl").html("<i class=\"fas fa-check\"></i> Saved");
            });

            // md view
            $('#item-save-button-md').on('click', function(){
                $("#item-save-button-md").addClass("disabled");
                $("#item-save-form-md").submit();
            });

            $('#item-saved-button-md').on('click', function(){
                $("#item-saved-button-md").off("mouseenter");
                $("#item-saved-button-md").off("mouseleave");
                $("#item-saved-button-md").addClass("disabled");
                $("#item-unsave-form-md").submit();
            });

            $("#item-saved-button-md").on('mouseenter', function(){
                $("#item-saved-button-md").attr("class", "btn btn-danger rounded text-white");
                $("#item-saved-button-md").html("<i class=\"far fa-trash-alt\"></i> Remove");
            });

            $("#item-saved-button-md").on('mouseleave', function(){
                $("#item-saved-button-md").attr("class", "btn btn-warning rounded text-white");
                $("#item-saved-button-md").html("<i class=\"fas fa-check\"></i> Saved");
            });

            // sm view
            $('#item-save-button-sm').on('click', function(){
                $("#item-save-button-sm").addClass("disabled");
                $("#item-save-form-sm").submit();
            });

            $('#item-saved-button-sm').on('click', function(){
                $("#item-saved-button-sm").off("mouseenter");
                $("#item-saved-button-sm").off("mouseleave");
                $("#item-saved-button-sm").addClass("disabled");
                $("#item-unsave-form-sm").submit();
            });

            $("#item-saved-button-sm").on('mouseenter', function(){
                $("#item-saved-button-sm").attr("class", "btn btn-sm btn-danger rounded text-white");
                $("#item-saved-button-sm").html("<i class=\"far fa-trash-alt\"></i> Remove");
            });

            $("#item-saved-button-sm").on('mouseleave', function(){
                $("#item-saved-button-sm").attr("class", "btn btn-sm btn-warning rounded text-white");
                $("#item-saved-button-sm").html("<i class=\"fas fa-check\"></i> Saved");
            });
            /**
             * End initial save button
             */




            


})(jQuery);	

