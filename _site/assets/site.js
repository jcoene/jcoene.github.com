jQuery(function($){
  $("section.tweets div.stream").tweet({
    username: "jcoene",
    avatar_size: 32,
    count: 6,
    loading_text: "loading...",
    template: "{avatar}{text}{time}"
  });
});
