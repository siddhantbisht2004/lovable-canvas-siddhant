
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, Video, ListVideo, Clapperboard, Star, Play, Film } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface VideoContent {
  id: string;
  title: string;
  youtubeLink: string;
}

const ProfileSection = () => {
  // Define the video content for each section
  const defaultProfilingVideos: VideoContent[] = [
    { id: "video-0", title: "Q.1: Write your career objective.", youtubeLink: "https://youtube.com/shorts/HLOlqDDvXf4" },
    { id: "video-1", title: "Q.2: Why do you want to be an engineer? Elaborate reasons.", youtubeLink: "https://youtube.com/shorts/l5qI5TYSP4E" },
    { id: "video-2", title: "Q.3: Write about projects or internship you have done/ are doing along with the learning.", youtubeLink: "https://youtube.com/shorts/-zFJy6kbqdg" },
    { id: "video-3", title: "Q.4: What would you consider a significant achievement in your life and why?", youtubeLink: "https://youtube.com/shorts/5RSkpi7Fot8" },
    { id: "video-4", title: "Q.5: Write about a failure of yours which you consider to share. What have you learned from it?", youtubeLink: "https://youtube.com/shorts/1nc7nxbpi6M" },
    { id: "video-5", title: "Q.6: What are your strengths? Write one or two instances where you have demonstrated your strengths.", youtubeLink: "https://youtube.com/shorts/dOaFwOjlCi4" },
    { id: "video-6", title: "Q.7: Write about your weaknesses. What are you doing to overcome your weaknesses?", youtubeLink: "https://youtube.com/shorts/8UL3Fi_kj4g" },
    { id: "video-7", title: "Q.8: What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?", youtubeLink: "https://youtube.com/shorts/M8fOeOoj11k" },
    { id: "video-8", title: "Q.9: Apart from academics, what else are you interested in? Make a separate list in terms of extracurricular activities, sports and any other interests.", youtubeLink: "https://youtube.com/shorts/XLW8v6IaV-k" },
    { id: "video-9", title: "Q.10: Give an example of an area, concept or thing that you are absolutely passionate about.", youtubeLink: "https://youtube.com/shorts/t59FdKd-NBk" },
    { id: "video-10", title: "Q.11: Describe yourself as an individual in 5 lines.", youtubeLink: "https://youtube.com/shorts/L9dkvn_N_ow" },
    { id: "video-11", title: "Q.12: What kinds of people do you enjoy working with?", youtubeLink: "https://youtube.com/shorts/L_96w-StH54" },
    { id: "video-12", title: "Q.13: What kinds of people you don't want to work with? What would you do if they became your senior in your dream job?", youtubeLink: "https://youtube.com/shorts/0bOHWYObq2Q" },
    { id: "video-13", title: "Q.14: What do you expect from your first job? Prioritize and write in order.", youtubeLink: "https://youtube.com/shorts/IN453ytcQQA" },
    { id: "video-14", title: "Q.15: In the past year, what have you been dissatisfied about in your performance?", youtubeLink: "https://youtube.com/shorts/MjUzsOFgqwM" },
    { id: "video-15", title: "Q.16: Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?", youtubeLink: "https://youtube.com/shorts/jXWPZmOWZz0" },
    { id: "video-16", title: "Q.17: Who is your role model? What qualities of that person you would like to see in your personality and why?", youtubeLink: "https://youtube.com/shorts/btTCxf4iOCY" },
    { id: "video-17", title: "Q.18: Write a few lines about your friends. Do you think they help/ may help you in achieving your goals? If yes, how? If no, why do you accompany them?", youtubeLink: "https://youtube.com/shorts/xSX6UPmKSJE" },
    { id: "video-18", title: "Q.19: Write 3 leadership qualities. How many do you possess? Write an instance where you have applied those qualities.", youtubeLink: "https://youtube.com/shorts/NLyUU5916V4" },
    { id: "video-19", title: "Q.20: So finally, tell us something more about yourself or introduce yourself.", youtubeLink: "https://youtube.com/shorts/yI-7blE_MSc" }
  ];
  
  const defaultMovieReviews: VideoContent[] = [
    { id: "review-0", title: "12 Angry Men (1957)", youtubeLink: "https://www.youtube.com/watch?v=_13J_9B5jEk" },
    { id: "review-1", title: "1) Your Favourite Dialogue and Why?", youtubeLink: "https://youtube.com/shorts/aA56g1iUZWE" },
    { id: "review-2", title: "2) Your personal Review.", youtubeLink: "https://youtube.com/shorts/kM9pUTVSsiE" },
    { id: "review-3", title: "3) Learning to take away from the movie.", youtubeLink: "https://youtube.com/shorts/3hTFoX4HQKw" },
    { id: "review-4", title: "4) Related concepts you've learned in the classroom.", youtubeLink: "https://youtube.com/shorts/RWAbeAl-awY" }
  ];
  
  const defaultPersonalVideos: VideoContent[] = [
    { id: "personal-video-0", title: "Group Discussion", youtubeLink: "https://youtu.be/JtaOw6ev2to" },
    { id: "personal-video-1", title: "Presentation", youtubeLink: "https://youtu.be/S2qoYS7FX4k" }
  ];

  // Use local storage for persistence
  const [videos, setVideos] = useLocalStorage<VideoContent[]>("profile-videos", defaultProfilingVideos);
  const [movieReviews, setMovieReviews] = useLocalStorage<VideoContent[]>("movie-reviews", defaultMovieReviews);
  const [personalVideos, setPersonalVideos] = useLocalStorage<VideoContent[]>("personal-videos", defaultPersonalVideos);

  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [selectedPersonalVideoIndex, setSelectedPersonalVideoIndex] = useState<number | null>(null);

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
              <Film className="h-4 w-4" />
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
                      
                      <div className="space-y-4">
                        {video.title && <p><span className="text-teal font-medium">Title:</span> {video.title}</p>}
                        {video.youtubeLink && (
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
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card className="bg-lightNavy border-lightNavy">
              <CardContent className="pt-6">
                {/* Featured Movie Section */}
                <div className="mb-8 bg-gradient-to-r from-lightNavy to-navy p-6 rounded-lg border border-teal/30">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-md overflow-hidden shadow-xl">
                        <img 
                          src="https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg" 
                          alt="12 Angry Men (1957)" 
                          className="w-full h-auto"
                        />
                        <div className="absolute top-2 right-2">
                          <div className="bg-black/70 text-yellow-400 px-2 py-1 rounded-md flex items-center gap-1">
                            <Star className="fill-yellow-400 h-4 w-4" />
                            <span className="font-bold">9.0</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                          <div className="p-4">
                            <Button size="sm" variant="outline" className="bg-teal/20 hover:bg-teal/30 text-white border-teal rounded-full">
                              <Play className="h-4 w-4 mr-1" /> Watch Trailer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl md:text-3xl font-bold text-lightestSlate mb-2 flex items-center gap-2">
                        12 Angry Men (1957)
                        <div className="flex text-yellow-400 ml-2">
                          <Star className="fill-yellow-400 h-5 w-5" />
                          <Star className="fill-yellow-400 h-5 w-5" />
                          <Star className="fill-yellow-400 h-5 w-5" />
                          <Star className="fill-yellow-400 h-5 w-5" />
                          <Star className="fill-yellow-400 h-5 w-5" />
                        </div>
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-navy px-2 py-1 text-xs rounded">Crime</span>
                        <span className="bg-navy px-2 py-1 text-xs rounded">Drama</span>
                        <span className="bg-navy px-2 py-1 text-xs rounded">Courtroom</span>
                      </div>
                      <p className="text-slate mb-4">
                        <span className="text-teal">Director:</span> Sidney Lumet  |  
                        <span className="text-teal ml-2">Cast:</span> Henry Fonda, Lee J. Cobb, Martin Balsam
                      </p>
                      <p className="text-slate italic mb-4">
                        "A classic courtroom drama masterpiece that examines human prejudice and the power of reasonable doubt."
                      </p>
                      <p className="text-slate">
                        The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each juror's prejudices and preconceptions about the trial, the accused, and each other.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Review Videos */}
                <div className="grid gap-6">
                  {movieReviews.slice(1).map((review, index) => (
                    <div key={review.id} className="border border-lightestNavy p-4 rounded-md">
                      <h3 className="text-lg font-medium flex items-center gap-2 text-lightestSlate mb-4">
                        <Clapperboard className="h-5 w-5 text-teal" /> Review {index + 1}
                      </h3>
                      
                      <div className="space-y-4">
                        {review.title && <p><span className="text-teal font-medium">Topic:</span> {review.title}</p>}
                        {review.youtubeLink && (
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
                        )}
                      </div>
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
                      
                      <div className="space-y-4">
                        {video.title && <p><span className="text-teal font-medium">Title:</span> {video.title}</p>}
                        {video.youtubeLink && (
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
                        )}
                      </div>
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
