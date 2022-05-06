// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const adapterCreator = () => {
    return {
        selectId: (article) => article.id,
        sortComparer: (preArticle, nextArticle) => preArticle.id.localeCompare(nextArticle.id)
    };
};

const articlesAdapter = createEntityAdapter(adapterCreator());

const initialState = {
    status: "idle",
    error: null,
    selectedArticle: {},
    articles: {
        ids: [],
        entities: {}
    }
};

export const fetchArticles = createAsyncThunk("articles/fetchArticles",
    async () => {
        try {
            const request = await fetch("api/Article/getall");
            return await request.json();
        } catch (error) {
            return error;
        }
    });

export const fetchArticleById = createAsyncThunk("articles/fetchArticleById",
    async (articleID) => {
        try {
            const request = await fetch(`/api/Article/getbyid/${articleID}`);
            return await request.json();
        } catch (error) {
            return error;
        }
    });

export const addArticle = createAsyncThunk("articles/addArticle",
    async (article) => {
        try {
            const request = await fetch("/api/Article/add",
                {
                    method: "POST",
                    body: JSON.stringify(article),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });
            return await request.json();
        } catch (error) {
            return error;
        }
    });

export const updateArticle = createAsyncThunk("articles/updateArticle",
    async (article) => {
        try {
            const request = await fetch(`/api/Article/update/${article.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(article),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });
            return await request.json();
        } catch (error) {
            return error;
        }
    });

export const deleteArticle = createAsyncThunk("articles/deleteArticle",
    async (articleID) => {
        try {
            const request = await fetch(`/api/Article/delete/${articleID}`,
                {
                    method: "DELETE"
                });
            return await request.json();
        } catch (error) {
            return error;
        }
    });

const sliceInvoker = () => {
    return {
        name: "articles",
        initialState,
        reducers: {
            setSelectedArticle: (state, action) => {
                state.selectedArticle = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload;
            },
            setStatus: (state, action) => {
                state.status = action.payload;
            },
            setArticles: (state, action) => {
                state.articles = action.payload;
            },
            addArticles: (state, action) => {
                state.articles.ids.push(action.payload.id);
                state.articles.entities[action.payload.id] = action.payload;
            }
        },
        extraReducers: {
            [fetchArticles.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchArticles.fulfilled]: (state, action) => {
                state.status = "succeeded";
                articlesAdapter.setAll(state, action.payload);
            },
            [fetchArticles.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [fetchArticleById.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchArticleById.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedArticle = action.payload;
            },
            [fetchArticleById.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [addArticle.pending]: (state, action) => {
                state.status = "loading";
            },
            [addArticle.fulfilled]: (state, action) => {
                state.status = "succeeded";
                articlesAdapter.addOne(state, action.payload);
            },
            [addArticle.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [updateArticle.pending]: (state, action) => {
                state.status = "loading";
            },
            [updateArticle.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedArticle = action.payload;
            },
            [updateArticle.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [deleteArticle.pending]: (state, action) => {
                state.status = "loading";
            },
            [deleteArticle.fulfilled]: (state, action) => {
                state.status = "succeeded";
                articlesAdapter.removeOne(state, action.payload);
            },
            [deleteArticle.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            }
        }
    };
};

const articlesSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllArticles,
    selectById: selectArticleById,
    selectIds: selectAllArticlesIds,
    selectEntities: selectAllArticlesEntities,
    selectTotal: selectTotalArticles
} = articlesAdapter.getSelectors((state) => state.articles.articles);

export const { setSelectedArticle, setError, setStatus, setArticles, addArticles } = articlesSlice.actions;
export default articlesSlice.reducer;