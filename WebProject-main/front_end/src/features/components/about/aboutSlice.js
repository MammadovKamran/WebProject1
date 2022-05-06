// @ts-nocheck
import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import team_mem1 from './../home/assets/img/team-aynur.png';
import team_mem2 from './../home/assets/img/team-chingiz.png';
import team_mem3 from './../home/assets/img/team-ramazan.png';
import team_mem4 from './../home/assets/img/team-question.png';
import team_mem5 from './../home/assets/img/team-mehemmed.png';

const aboutAdapter = createEntityAdapter({
  selectId: (teamMember) => teamMember.id,
  sortComparer: (preMember, nextMember) => preMember.id.localeComparer(nextMember.id)
});

const initialState = {
  error: null,
  status: 'idle',
  selectedMember: {},
  members: {
    ids: ['id1', 'id2', 'id3', 'id4', 'id5'],
    entities: {
      id1: {
        id: 'id1',
        name: 'Aynur Nizamova',
        position: 'Biznes Konsultant',
        education: 'Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı',
        img: team_mem1
      },
      id2: {
        id: 'id2',
        name: 'Çingiz Novruzzadə',
        position: 'Təsisçi və Direktor',
        education: 'İUBH International Management və Univeristy of East Anglia Investment and Financial Management',
        img: team_mem2
      },
      id3: {
        id: 'id3',
        name: 'Ramazan Əliquliyev',
        position: 'Satış və Marketinq',
        education: 'Saint Petersburg, Polytechnic University, Digital Marketing and E-Commerce',
        img: team_mem3
      },
      id4: {
        id: 'id4',
        name: 'Elnur Şabanov',
        position: 'Aparıcı Biznes Konsultant',
        education: 'Azərbaycan Dövlət İqtisad Universiteti, Beynəlxalq Ticarət və Kommersiya',
        img: team_mem4
      },
      id5: {
        id: 'id5',
        name: 'Məhəmməd Şıxıyev',
        position: 'Aparıcı Data Analitik',
        education: ' French-Azerbaijani University, BS Geoscience',
        img: team_mem5
      }
    }
  }
};

export const fetchMembers = createAsyncThunk('about/fetchMembers', async () => {
  try {
    const request = await fetch('/api/employeesgetall');
    return await request.json();
  } catch (error) {
    return error;
  }
});

export const fetchMemberById = createAsyncThunk('about/fetchMemberById', async (id) => {
  try {
    const request = await fetch(`/api/employeesgetone?id=${id}`);
    return await request.json();
  } catch (error) {
    return error;
  }
});

export const addMember = createAsyncThunk('about/addMember', async (member) => {
  try {
    const request = await fetch('/api/employeesadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member)
    });
    return await request.json();
  } catch (error) {
    return error;
  }
});

export const updateMember = createAsyncThunk('about/updateMember', async (member) => {
  try {
    const request = await fetch(`/api/employeesupdate${`/${member.id}`}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member)
    });
    return await request.json();
  } catch (error) {
    return error;
  }
});

export const deleteMember = createAsyncThunk('about/deleteMember', async (id) => {
  try {
    const request = await fetch(`/api/employeesdelete${`/${id}`}`);
    return await request.json();
  } catch (error) {
    return error;
  }
});

const sliceInvoker = () => {
  return {
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchMembers.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        aboutAdapter.setAll(state, action.payload);
      },
      [fetchMembers.rejected]: (state, action) => {
        state.error = action.payload.error.message;
        state.status = 'failed';
      },
      [fetchMembers.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchMemberById.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.selectedMember = action.payload;
      },

      [addMember.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        aboutAdapter.addOne(state, action.payload);
      },
      [addMember.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error.message;
      },
      [addMember.pending]: (state, action) => {
        state.status = 'loading';
      }
    }
  };
};

const aboutSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllMembers,
  selectById: selectMemberById,
  selectIds: selectMemberIds,
  selectEntities: selectMemberEntities,
  selectTotal: selectMemberTotal
} = aboutAdapter.getSelectors((state) => state.about.members);

export default aboutSlice.reducer;
