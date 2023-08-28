"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RMCard from "./RecommendMoviesCard";
import Image from "next/image";

const moviesData = require("@/data/data.json").movies;

const movieGenreInteface = [
  "Action",
  "Mystery",
  "Horror",
  "Drama",
  "Animation",
  "none",
] as const;

const movieTypeInteface = ["Movie", "TVSeries", "none"] as const;

const yearOldReleasted = ["does'tmatter", "3", "5", "10", "none"] as const;

const formSchema = z.object({
  movieGenre: z.enum(movieGenreInteface).refine((val) => val !== "none", {
    message: "You need to choose the value",
  }),
  movieType: z.enum(movieTypeInteface).refine((val) => val !== "none", {
    message: "You need to choose the value",
  }),
  rating: z.string(),
  movieYear: z.enum(yearOldReleasted).refine((val) => val !== "none", {
    message: "You need to choose the value",
  }),
});

export default function RecommendationMoviesCom() {
  const [userData, setUserData] = useState<z.infer<typeof formSchema>>();
  const [isLoading, setIsLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState<any>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movieGenre: "none",
      movieType: "none",
      rating: "0",
      movieYear: "none",
    },
  });

  useEffect(() => {
    handleRandomMovie();
  }, [userData]);

  // 2. Define a submit handler.
  function onSubmit(userValues: z.infer<typeof formSchema>) {
    // console.log("data", userValues);
    // setIsLoading(true);
    setUserData(userValues);
    // setIsLoading(false);
  }

  const handleFilterData = (e: any) => {
    if (e.rating.star >= Number(userData?.rating) / 10) {
      if (e.contentType == userData?.movieType) {
        if (e.genre.includes(userData?.movieGenre)) {
          if (userData?.movieYear === "does'tmatter") {
            return e;
          } else if (
            e.releaseDetailed.year <
            2023 - Number(userData?.movieYear)
          ) {
            return e;
          }
        }
      }
    }
    return;
  };

  const handleSortYear = (a: any, b: any) => {
    return b.rating.star - a.rating.star;
  };

  const filterMovieData = moviesData
    .sort(handleSortYear)
    .filter(handleFilterData);

  const handleRandomMovie = () => {
    const randomData = Math.floor(Math.random() * filterMovieData.length);
    const rdMovie = filterMovieData[randomData];
    // console.log("rdMovie", rdMovie);
    setRandomMovie(rdMovie);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="flex flex-col px-8 py-10 border-2 border-black dark:border-slate-300 rounded-lg lg:w-[700px] w-full">
          <h1 className="text-xl font-medium">
            Please answer some question so we can understand you
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-10 flex flex-col"
            >
              <FormField
                control={form.control}
                name="movieGenre"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Chosse Genre Movie</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup {...field}>
                              <SelectItem value="Action">Action</SelectItem>
                              <SelectItem value="Mystery">Mystery</SelectItem>
                              <SelectItem value="Drama">Drama</SelectItem>
                              <SelectItem value="Horror">Horror</SelectItem>
                              <SelectItem value="Animation">
                                Animation
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="movieType"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Chosse Type Movie</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup {...field}>
                              <SelectItem value="Movie">Movie</SelectItem>
                              <SelectItem value="TVSeries">TvShows</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="movieYear"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        How old would you like the movie to be?
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup {...field}>
                              <SelectItem value="does'tmatter">
                                Doesn't matter
                              </SelectItem>
                              <SelectItem value="3">3 years</SelectItem>
                              <SelectItem value="5">5 years</SelectItem>
                              <SelectItem value="10">10 years</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Movie score need to higher than</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="how many score do you want for the movie"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="self-end">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {randomMovie !== undefined && (
        <div className="md:h-[400px] w-full flex-col flex items-center rounded-xl">
          <div className="flex justify-between max-md:flex-col gap-10 mb-5">
            {/* <RMCard
                rating={randomMovie.rating.star * 10}
                title={randomMovie.title}
                date={
                  randomMovie.releaseDetailed.month +
                  "/" +
                  randomMovie.releaseDetailed.day +
                  "/" +
                  randomMovie.releaseDetailed.year
                }
                img={randomMovie.image}
                id={randomMovie.id}
              /> */}
            <div className="md:w-1/4 w-full">
              <Image
                priority
                src={randomMovie.image}
                alt="Random Movie Image"
                width={180}
                height={280}
                className="rounded-md mx-auto h-[240px]"
              />
            </div>
            <div className="md:w-3/4 w-full">
              <p>
                <strong>Name: </strong>
                {randomMovie.title}
              </p>
              <p>
                <strong>Release Date: </strong>
                {randomMovie.releaseDetailed.month +
                  "/" +
                  randomMovie.releaseDetailed.day +
                  "/" +
                  randomMovie.releaseDetailed.year}
              </p>
              <p>
                <strong>User Score: </strong>
                {randomMovie.rating.star * 10}%
              </p>
              <p>
                <strong>Director: </strong>
                {randomMovie.directors.length == 0
                  ? "Not Update Yet!"
                  : randomMovie.directors.map((item: string, index: number) => {
                      return (
                        <span key={index}>
                          {index == randomMovie.directors.length - 1
                            ? item
                            : item + ", "}
                        </span>
                      );
                    })}
              </p>
              <p>
                <strong>Plot: </strong>
                {randomMovie.plot}
              </p>
            </div>
          </div>
          <Button onClick={handleRandomMovie}>Click to change Movie</Button>
          <hr className="my-10 border-black w-full" />
        </div>
      )}
      {/* render movies list */}
      {/* <hr className="my-10" /> */}
      {/* {isLoading == true ? (
        "You are not choose option or the movies are loading"
      ) : (
        <div className="grid 4xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 ss:grid-cols-1 gap-10">
          {filterMovieData.map((item: any) => {
            const rating = item.rating.star * 10;
            const title = item.title;
            const date =
              item.releaseDetailed.month +
              "/" +
              item.releaseDetailed.day +
              "/" +
              item.releaseDetailed.year;

            return (
              <RMCard
                rating={rating}
                title={title}
                date={date}
                img={item.image}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </div>
      )} */}
    </div>
  );
}
