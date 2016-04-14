angular.module('villaEventsAndEntertainments')
        .controller('IndexController', ['$scope', '$anchorScroll', '$location', 'indexFactory', function($scope, $anchorScroll, $location, indexFactory) {
            $scope.socialLinks = indexFactory.socialLinks;
            $scope.bgImage = indexFactory.bgImage;
            $scope.introductionCarousel = indexFactory.introductionCarousel;

            $scope.goTo = function(section){
                if($location.hash() !== section) {
                    $location.hash(section);
                    indexFactory.scrollTo(section);
                }else {
                }
            }
        }])
        .controller('AboutController', ['$scope', 'indexFactory', function($scope, indexFactory) {
            $scope.about = indexFactory.about;
            $scope.aboutlist = indexFactory.aboutlist;
            $scope.extraAboutList = indexFactory.extraAboutList;
        }])
        .controller('ServicesController', ['$scope', 'indexFactory', function($scope, indexFactory) {
            var serviceslist = [];
            for(var i=0;i<indexFactory.aboutlist.length;i++){
                serviceslist.push(indexFactory.aboutlist[i]);
            }
            for(var i=0;i<indexFactory.extraAboutList.length;i++){
                serviceslist.push(indexFactory.extraAboutList[i]);
            }
            $scope.serviceslist = serviceslist;
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
                window.location.reload();
            }
        }]);
