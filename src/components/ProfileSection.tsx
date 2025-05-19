import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, Video, ListVideo, Clapperboard, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoContent {
  id: string;
  title: string;
  youtubeLink: string;
}

const ProfileSection = () => {
  // Use local storage for persistence
  const [videos, setVideos] = useLocalStorage<VideoContent[]>("profile-videos", Array(20).fill(null).map((_, i) => ({ 
    id: `video-${i}`, 
    title: "", 
    youtubeLink: "" 
  })));
  
  const [movieReviews, setMovieReviews] = useLocalStorage<VideoContent[]>("movie-reviews", [
    { 
      id: `review-0`, 
      title: "12 Angry Men (1957)", 
      youtubeLink: "https://www.youtube.com/watch?v=_13J_9B5jEk" 
    },
    ...Array(3).fill(null).map((_, i) => ({ 
      id: `review-${i+1}`, 
      title: "", 
      youtubeLink: "" 
    }))
  ]);
  
  const [personalVideos, setPersonalVideos] = useLocalStorage<VideoContent[]>("personal-videos", Array(2).fill(null).map((_, i) => ({ 
    id: `personal-video-${i}`, 
    title: "", 
    youtubeLink: "" 
  })));

  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoLink, setNewVideoLink] = useState("");
  const [newReviewTitle, setNewReviewTitle] = useState("");
  const [newReviewLink, setNewReviewLink] = useState("");
  const [newPersonalVideoTitle, setNewPersonalVideoTitle] = useState("");
  const [newPersonalVideoLink, setNewPersonalVideoLink] = useState("");
  
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [selectedPersonalVideoIndex, setSelectedPersonalVideoIndex] = useState<number | null>(null);

  const updateVideo = (index: number) => {
    if (newVideoTitle.trim() !== "" || newVideoLink.trim() !== "") {
      const updatedVideos = [...videos];
      if (newVideoTitle.trim() !== "") {
        updatedVideos[index].title = newVideoTitle;
      }
      if (newVideoLink.trim() !== "") {
        updatedVideos[index].youtubeLink = newVideoLink;
      }
      setVideos(updatedVideos);
      setNewVideoTitle("");
      setNewVideoLink("");
      setSelectedVideoIndex(null);
    }
  };

  const updateReview = (index: number) => {
    if (newReviewTitle.trim() !== "" || newReviewLink.trim() !== "") {
      const updatedReviews = [...movieReviews];
      if (newReviewTitle.trim() !== "") {
        updatedReviews[index].title = newReviewTitle;
      }
      if (newReviewLink.trim() !== "") {
        updatedReviews[index].youtubeLink = newReviewLink;
      }
      setMovieReviews(updatedReviews);
      setNewReviewTitle("");
      setNewReviewLink("");
      setSelectedReviewIndex(null);
    }
  };
  
  const updatePersonalVideo = (index: number) => {
    if (newPersonalVideoTitle.trim() !== "" || newPersonalVideoLink.trim() !== "") {
      const updatedPersonalVideos = [...personalVideos];
      if (newPersonalVideoTitle.trim() !== "") {
        updatedPersonalVideos[index].title = newPersonalVideoTitle;
      }
      if (newPersonalVideoLink.trim() !== "") {
        updatedPersonalVideos[index].youtubeLink = newPersonalVideoLink;
      }
      setPersonalVideos(updatedPersonalVideos);
      setNewPersonalVideoTitle("");
      setNewPersonalVideoLink("");
      setSelectedPersonalVideoIndex(null);
    }
  };
  
  // Helper function to extract YouTube ID from URL
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // Match patterns for YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return null;
  };

  return (
    <section id="profile" className="py-20 bg-navy">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">04.</span> Profile Content
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-3">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <ListVideo className="h-4 w-4" />
              <span>Profiling Videos</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Clapperboard className="h-4 w-4" />
              <span>Movie Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>My Videos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="mt-6">
            <Card className="bg-lightNavy border-lightNavy">
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  {videos.map((video, index) => (
                    <div key={video.id} className="border border-lightestNavy p-4 rounded-md">
                      <h3 className="text-lg font-medium flex items-center gap-2 text-lightestSlate mb-4">
                        <Video className="h-5 w-5 text-teal" /> Video {index + 1}
                      </h3>
                      
                      {selectedVideoIndex === index ? (
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-slate block mb-2">Title:</label>
                            <Input 
                              placeholder={video.title || "Enter video title"}
                              value={newVideoTitle}
                              onChange={(e) => setNewVideoTitle(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-slate block mb-2">YouTube Link:</label>
                            <Input 
                              placeholder={video.youtubeLink || "Paste YouTube link"}
                              value={newVideoLink}
                              onChange={(e) => setNewVideoLink(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button onClick={() => updateVideo(index)} className="bg-teal text-navy hover:bg-teal/90">
                              Save
                            </Button>
                            <Button variant="outline" onClick={() => setSelectedVideoIndex(null)} className="border-lightestNavy">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {video.title && <p><span className="text-teal font-medium">Title:</span> {video.title}</p>}
                          {video.youtubeLink && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <Youtube className="h-5 w-5 text-red-500" />
                                <a 
                                  href={video.youtubeLink.startsWith('http') ? video.youtubeLink : `https://${video.youtubeLink}`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-teal hover:underline break-all"
                                >
                                  {video.youtubeLink}
                                </a>
                              </div>
                              
                              {getYoutubeEmbedUrl(video.youtubeLink) && (
                                <div className="rounded-md overflow-hidden">
                                  <AspectRatio ratio={16/9}>
                                    <iframe 
                                      src={getYoutubeEmbedUrl(video.youtubeLink)}
                                      title={video.title || `Video ${index + 1}`}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                      allowFullScreen 
                                      className="w-full h-full"
                                    />
                                  </AspectRatio>
                                </div>
                              )}
                            </div>
                          )}
                          {!video.title && !video.youtubeLink && (
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedVideoIndex(index)}
                              className="border-teal text-teal hover:bg-teal/10"
                            >
                              Add Content
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card className="bg-lightNavy border-lightNavy">
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  {movieReviews.map((review, index) => (
                    <div key={review.id} className={`border border-lightestNavy p-4 rounded-md ${review.title === '12 Angry Men (1957)' ? 'ring-2 ring-teal' : ''}`}>
                      <h3 className="text-lg font-medium flex items-center gap-2 text-lightestSlate mb-4">
                        <Clapperboard className="h-5 w-5 text-teal" /> Review {index + 1}
                      </h3>
                      
                      {selectedReviewIndex === index ? (
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-slate block mb-2">Movie Title:</label>
                            <Input 
                              placeholder={review.title || "Enter movie title"}
                              value={newReviewTitle}
                              onChange={(e) => setNewReviewTitle(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-slate block mb-2">YouTube Review Link:</label>
                            <Input 
                              placeholder={review.youtubeLink || "Paste YouTube link"}
                              value={newReviewLink}
                              onChange={(e) => setNewReviewLink(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button onClick={() => updateReview(index)} className="bg-teal text-navy hover:bg-teal/90">
                              Save
                            </Button>
                            <Button variant="outline" onClick={() => setSelectedReviewIndex(null)} className="border-lightestNavy">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {review.title && (
                            <div className={`${review.title === '12 Angry Men (1957)' ? 'bg-lightestNavy/30 p-3 rounded-lg' : ''}`}>
                              <div className="flex items-center gap-2 mb-2">
                                {review.title === '12 Angry Men (1957)' && (
                                  <div className="flex text-yellow-400">
                                    <Star className="fill-yellow-400 h-5 w-5" />
                                    <Star className="fill-yellow-400 h-5 w-5" />
                                    <Star className="fill-yellow-400 h-5 w-5" />
                                    <Star className="fill-yellow-400 h-5 w-5" />
                                    <Star className="fill-yellow-400 h-5 w-5" />
                                  </div>
                                )}
                                <p className={`${review.title === '12 Angry Men (1957)' ? 'text-lightestSlate font-semibold text-lg' : ''}`}>
                                  {review.title === '12 Angry Men (1957)' ? review.title : (
                                    <><span className="text-teal font-medium">Movie:</span> {review.title}</>
                                  )}
                                </p>
                              </div>
                              {review.title === '12 Angry Men (1957)' && (
                                <p className="text-slate italic mb-3">
                                  "A classic courtroom drama masterpiece that examines human prejudice and the power of reasonable doubt."
                                </p>
                              )}
                            </div>
                          )}
                          
                          {review.youtubeLink && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <Youtube className="h-5 w-5 text-red-500" />
                                <a 
                                  href={review.youtubeLink.startsWith('http') ? review.youtubeLink : `https://${review.youtubeLink}`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-teal hover:underline break-all"
                                >
                                  {review.youtubeLink}
                                </a>
                              </div>
                              
                              {getYoutubeEmbedUrl(review.youtubeLink) && (
                                <div className="rounded-md overflow-hidden">
                                  <AspectRatio ratio={16/9}>
                                    <iframe 
                                      src={getYoutubeEmbedUrl(review.youtubeLink)}
                                      title={review.title || `Review ${index + 1}`}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                      allowFullScreen 
                                      className="w-full h-full"
                                    />
                                  </AspectRatio>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {!review.title && !review.youtubeLink && (
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedReviewIndex(index)}
                              className="border-teal text-teal hover:bg-teal/10"
                            >
                              Add Content
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="personal" className="mt-6">
            <Card className="bg-lightNavy border-lightNavy">
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  {personalVideos.map((video, index) => (
                    <div key={video.id} className="border border-lightestNavy p-4 rounded-md">
                      <h3 className="text-lg font-medium flex items-center gap-2 text-lightestSlate mb-4">
                        <Video className="h-5 w-5 text-teal" /> My Video {index + 1}
                      </h3>
                      
                      {selectedPersonalVideoIndex === index ? (
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-slate block mb-2">Title:</label>
                            <Input 
                              placeholder={video.title || "Enter video title"}
                              value={newPersonalVideoTitle}
                              onChange={(e) => setNewPersonalVideoTitle(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-slate block mb-2">YouTube Link:</label>
                            <Input 
                              placeholder={video.youtubeLink || "Paste YouTube link"}
                              value={newPersonalVideoLink}
                              onChange={(e) => setNewPersonalVideoLink(e.target.value)}
                              className="bg-navy border-lightestNavy"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button onClick={() => updatePersonalVideo(index)} className="bg-teal text-navy hover:bg-teal/90">
                              Save
                            </Button>
                            <Button variant="outline" onClick={() => setSelectedPersonalVideoIndex(null)} className="border-lightestNavy">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {video.title && <p><span className="text-teal font-medium">Title:</span> {video.title}</p>}
                          {video.youtubeLink && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <Youtube className="h-5 w-5 text-red-500" />
                                <a 
                                  href={video.youtubeLink.startsWith('http') ? video.youtubeLink : `https://${video.youtubeLink}`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-teal hover:underline break-all"
                                >
                                  {video.youtubeLink}
                                </a>
                              </div>
                              
                              {getYoutubeEmbedUrl(video.youtubeLink) && (
                                <div className="rounded-md overflow-hidden">
                                  <AspectRatio ratio={16/9}>
                                    <iframe 
                                      src={getYoutubeEmbedUrl(video.youtubeLink)}
                                      title={video.title || `Video ${index + 1}`}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                      allowFullScreen 
                                      className="w-full h-full"
                                    />
                                  </AspectRatio>
                                </div>
                              )}
                            </div>
                          )}
                          {!video.title && !video.youtubeLink && (
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedPersonalVideoIndex(index)}
                              className="border-teal text-teal hover:bg-teal/10"
                            >
                              Add Content
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProfileSection;
