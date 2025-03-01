<template>
  <div class="team-members">
    <div v-for="(member, index) in sortedMembers" :key="member.name" class="member-row"
      :class="{ 'even-row': index % 2 === 1 }">
      <div v-if="index % 2 === 0" class="member-photo">
        <img v-if="member.image" :src="member.image" :alt="member.name" />
        <div v-else class="placeholder-image"></div>
      </div>

      <div class="member-info">
        <h2>{{ member.name }}</h2>
        <div class="member-position">{{ member.position }}</div>

        <div v-if="member.email" class="member-contact">
          <a :href="`mailto:${member.email}`">{{ member.email }}</a>
        </div>

        <div v-if="member.website" class="member-contact">
          <a :href="member.website" target="_blank" rel="noopener noreferrer">Website</a>
        </div>

        <div class="member-bio" v-html="member.bio"></div>
      </div>

      <div v-if="index % 2 === 1" class="member-photo">
        <img v-if="member.image" :src="member.image" :alt="member.name" />
        <div v-else class="placeholder-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Cannot use TS when import from @temp
import { computed, ref, onMounted } from 'vue';
import { members as memberData } from '@temp/member-data/members.js';

export default {
  setup() {
    const members = ref(memberData);

    const sortedMembers = computed(() => {
      return [...members.value].sort((a, b) => {
        // Sort by order field first (if available)
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        // Fall back to alphabetical by name
        return a.name.localeCompare(b.name);
      });
    });

    return { sortedMembers };
  }
}
</script>

<style scoped>
.team-members {
  max-width: 1000px;
  margin: 0 auto;
}

.member-row {
  display: flex;
  margin-bottom: 3rem;
  align-items: center;
}

.member-row:last-child {
  margin-bottom: 0;
}

.member-photo {
  flex: 0 0 40%;
  padding: 1rem;
}

.member-photo img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.placeholder-image {
  width: 100%;
  aspect-ratio: 1;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.member-info {
  flex: 0 0 60%;
  padding: 1rem 2rem;
}

.member-info h2 {
  margin-top: 0;
  color: var(--c-text);
  font-size: 1.8rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.member-position {
  font-size: 1.2rem;
  color: var(--c-brand);
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-contact {
  margin-bottom: 0.5rem;
}

.member-bio {
  margin-top: 1rem;
  line-height: 1.6;
}

.even-row {
  flex-direction: row-reverse;
}

.even-row .member-info {
  text-align: right;
}

@media (max-width: 768px) {

  .member-row,
  .even-row {
    flex-direction: column;
  }

  .member-photo {
    flex: 0 0 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .member-info,
  .even-row .member-info {
    flex: 0 0 100%;
    text-align: center;
    padding: 1rem;
  }
}
</style>