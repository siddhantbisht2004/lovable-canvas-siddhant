
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, Video, ListVideo, Clapperboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

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
  
  const [movieReviews, setMovieReviews] = useLocalStorage<VideoContent[]>("movie-reviews", Array(4).fill(null).map((_, i) => ({ 
    id: `review-${i}`, 
    title: "", 
    youtubeLink: "" 
  })));

  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoLink, setNewVideoLink] = useState("");
  const [newReviewTitle, setNewReviewTitle] = useState("");
  const [newReviewLink, setNewReviewLink] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);

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
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <ListVideo className="h-4 w-4" />
              <span>Profiling Videos</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Clapperboard className="h-4 w-4" />
              <span>Movie Reviews</span>
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
                            <div>
                              <p className="mb-2"><span className="text-teal font-medium">YouTube Link:</span></p>
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
                            </div>
                          )}
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedVideoIndex(index)}
                            className="border-teal text-teal hover:bg-teal/10"
                          >
                            {video.title || video.youtubeLink ? "Edit" : "Add Content"}
                          </Button>
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
                    <div key={review.id} className="border border-lightestNavy p-4 rounded-md">
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
                          {review.title && <p><span className="text-teal font-medium">Movie:</span> {review.title}</p>}
                          {review.youtubeLink && (
                            <div>
                              <p className="mb-2"><span className="text-teal font-medium">Review Link:</span></p>
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
                            </div>
                          )}
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedReviewIndex(index)}
                            className="border-teal text-teal hover:bg-teal/10"
                          >
                            {review.title || review.youtubeLink ? "Edit" : "Add Content"}
                          </Button>
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
