import { actions } from '../store/actions';

export default () => (
    <div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Avatar</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input className="input" type="url" placeholder="Avatar Icon URL"
                        onChange={(event) => {
                            dispatch(actions.updateAvatar(event.target.value))
                        }}/>
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Name</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input className="input" placeholder="Bot Name" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Header</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input className="input" placeholder="Header Color" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Bot</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input className="input" placeholder="Bot Message Color" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">User</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input className="input" placeholder="User Message Color" />
                    </p>
                </div>
            </div>
        </div>
    </div>
)