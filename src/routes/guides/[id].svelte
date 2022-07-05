<script context="module">
  export async function load(context) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { id } = context.params;
    const response = await context.fetch(`/guides/${id}.json`);
    const { guide } = await response.json();
    console.log(guide);
    if (response.ok) {
      return {
        props: {
          guide,
        },
      };
    }
    return { status: response.status, error: new Error("could not fetch the guides") };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
