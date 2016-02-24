angular.module('villaEventsAndEntertainments')
        .controller('IndexController', ['$scope', 'indexFactory', function($scope, indexFactory) {
            $scope.socialLinks = indexFactory.socialLinks;
            $scope.bgImage = indexFactory.bgImage;
            $scope.introductionCarousel = indexFactory.introductionCarousel;
        }])
        .controller('AboutController', ['$scope', 'indexFactory', function($scope, indexFactory) {
            $scope.about = indexFactory.about;
            $scope.aboutlist = indexFactory.aboutlist;
        }])
        .controller('ServicesController', ['$scope', 'indexFactory', function($scope, indexFactory) {
            $scope.serviceslist = indexFactory.services;
        }])
        .controller('GalleryController', ['$scope', 'galleryFactory', function($scope, galleryFactory) {
            $scope.showGallery = function(category){
                $('#galleryModal').openModal({
                  dismissible: false,
                  opacity: .5,
                  in_duration: 300,
                  out_duration: 200,
                  ready: function() {
                    var galleryHtml = '<div class="carousel">';
                    $('#selectedCategory').html(category);
                    var selectedCategory = galleryFactory.pictures[category];
                    for(var i=0;i<selectedCategory.length;i++){
                        galleryHtml += '<a class="carousel-item" href="javascript:void(0)"><img class="responsive-img materialboxed slide-img" data-caption="Some picture" src="images/gallery/'+category+'/'+selectedCategory[i]+'" style="width:300px;height:200px;"></a>';
                    }
                    $('#slideshow').html(galleryHtml+'</div>');
                    $('.carousel').carousel();
                    $('.materialboxed').materialbox();
                    Materialize.toast('Click on each picture or swipe/drag along.', 6000, 'rounded');
                  },
                  complete: function() {
                    $('#selectedCategory').html('')
                  }
                }
                );
            }
            $scope.closeGallery = function(){
                $('#galleryModal').closeModal();
                $('#materialbox-overlay').hide();
            }
        }]);
