namespace $.$$ {
	export class $hyoo_scout extends $.$hyoo_scout {

		key( key : string ) {
			return key
		}

		gists_title() {
			return `${ super.gists_title() } (${ this.gist_links().length } шт)`
		}

		@ $mol_mem
		gists_favorite( next? : boolean ) {
			return this.$.$mol_state_local.value( `${ this }.gists_favorite()` , next ) || false
		}

		@ $mol_mem_key
		gist_favorite( id : string , next? : boolean ) {
			return this.$.$mol_state_local.value( `${ this }.gist_favorite(${ id })` , next ) || false
		}

		@ $mol_mem_key
		gists_favorite_duration() {
			
			const dur = this.data()
			.filter( gist => this.gist_favorite( gist.title() ) )
			.reduce( ( sum , gist )=> sum + parseInt( gist.tags()['Длительность'][0] ) , 0 )
			
			return dur ? `${ dur } мин` : ''
		}

		@ $mol_mem_key
		gists_favorite_label() {
			return this.gists_favorite_duration() ? [ this.Gists_favorite_duration() ] : []
		}			

		gist_links() {

			let gists = this.data()

			if( this.gists_favorite() ) {

				gists = gists.filter( gist => this.gist_favorite( gist.title() ) )
			
			} else {
			
				gists = gists.filter( gist => {

					const tags = gist.tags()
					
					aspect : for( const aspect in tags ) {

						for( const tag of tags[ aspect ] ) {
							if( this.filter_tag_checked({ aspect , tag }) ) continue aspect
						}
						
						return false
					}
					
					return true
				} )
				
			}

			gists = gists.filter( $mol_match_text( this.gists_filter_query() , gist => [ gist.title() , gist.content() ] ) )
			
			gists.sort( $mol_compare_text( gist => gist.title() ) )
			
			return gists.map( gist => this.Gist_link( gist.title() ) )
		}

		@ $mol_mem_key
		gist( id : string ) {
			return this.data().find( gist => gist.title() === id ) as $hyoo_scout_gist
		}

		gist_icon( id : string ) {
			return this.gist( id ).icon()
		}

		gist_title( id : string ) {
			return this.gist( id ).title()
		}

		gist_content( id : string ) {
			return this.gist( id ).content()
		}

		tag_title( key : { aspect : string , tag : string } ) {
			return key.tag
		}

		gist_aspects( id : string ) {
			return Object.keys( this.gist( id ).tags() ).map( aspect => this.Gist_aspect( aspect ) )
		}

		gist_remarks( id : string , next? : string ) {
			return this.$.$mol_state_local.value( `${ this }.gist_remarks(${ JSON.stringify( id ) })` , next ) || ''
		}

		gist_aspect_tags( aspect : string ) {
			return this.gist_current().tags()[ aspect ].map( ( tag : string ) => this.Gist_tag({ aspect , tag }) )
		}

		gist_current( next? : $hyoo_scout_gist ) {

			const id = this.$.$mol_state_arg.value( 'gist' , next && next.title() )
			if( !id ) return null

			return this.gist( id )
		}

		filter_aspects() {
			return Object.keys( $hyoo_scout_gist.make({}).tags() )
			.filter( aspect => this.filter_aspect_tags( aspect ).length > 1 )
			.map( aspect => this.Filter_aspect( aspect ) )
		}

		@ $mol_mem_key
		filter_aspect_tags( aspect : string ) {

			const values = new Set< string >()
			
			for( const gist of this.data() ) {
				for( const value of gist.tags()[ aspect ] ) {
					values.add( value )
				}
			}

			return [ ... values ]
			.sort( $mol_compare_text( tag => tag ) )
			.map( ( tag : string ) => this.Filter_tag({ aspect , tag }) )
		}

		@ $mol_mem_key
		filter_tag_checked( key : { aspect : string , tag : string } , next? : boolean ) {
			if( next !== undefined ) new $mol_defer( ()=> {
				this.gist_current( null )
				this.Gists().Body().scroll_top( 0 )
			} )
			next = this.$.$mol_state_local.value( `${ this }.filter_tag_checked(${ JSON.stringify( key ) })` , next )
			if( next == null ) next = super.filter_tag_checked( key )
			return next
		}

		pages() {
			return [
				this.Filter() ,
				this.Gists() ,
				... this.gist_current() ? [ this.Gist( this.gist_current().title() ) ] : [] ,
			]
		}

	}
}
