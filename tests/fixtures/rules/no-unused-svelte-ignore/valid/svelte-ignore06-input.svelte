<div>
  <!-- svelte-ignore a11y-label-has-associated-control a11y-no-noninteractive-tabindex -->
  {#each [] as e}
    <label tabindex="0">Click</label>
    <ul tabindex="0" />
  {/each}
</div>
<div>
  <!-- svelte-ignore a11y-label-has-associated-control a11y-no-noninteractive-tabindex -->
  {#each [] as e}
    A
  {:else}
    <div />
    <label tabindex="0">Click</label>
    <ul tabindex="0" />
  {/each}
</div>
